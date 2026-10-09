<#
.SYNOPSIS
  Makes a web-ready copy of an original photograph from artwork-intake/.

.DESCRIPTION
  - Reads only from artwork-intake/ and writes only to public/images/.
  - Never modifies the original.
  - Applies the camera's rotation (EXIF orientation) so the photo displays upright.
  - Scales down to fit within MaxSize pixels on the longest side, preserving the aspect ratio.
    Never crops and never enlarges.
  - Writes a fresh image without metadata, removing GPS location and camera details.
  - Refuses to overwrite an existing file unless -Force is given.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/prepare-image.ps1 `
    -Source artwork-intake/blue-dresser/IMG_1234.jpg `
    -Destination public/images/artworks/functional/blue-dresser.jpeg
#>
param(
  [Parameter(Mandatory = $true)][string]$Source,
  [Parameter(Mandatory = $true)][string]$Destination,
  [int]$MaxSize = 2000,
  [ValidateRange(50, 100)][int]$Quality = 85,
  [switch]$Force
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$intake = [IO.Path]::GetFullPath((Join-Path $root 'artwork-intake'))
$images = [IO.Path]::GetFullPath((Join-Path $root 'public\images'))
$src = [IO.Path]::GetFullPath((Join-Path $root $Source))
$dest = [IO.Path]::GetFullPath((Join-Path $root $Destination))

if (-not $src.StartsWith($intake + '\', [StringComparison]::OrdinalIgnoreCase)) {
  throw "Source must be inside artwork-intake/: $Source"
}
if (-not $dest.StartsWith($images + '\', [StringComparison]::OrdinalIgnoreCase)) {
  throw "Destination must be inside public/images/: $Destination"
}
if (-not (Test-Path -LiteralPath $src)) { throw "Source not found: $Source" }
if ((Test-Path -LiteralPath $dest) -and -not $Force) {
  throw "Destination already exists (use -Force only with approval): $Destination"
}
$ext = [IO.Path]::GetExtension($dest).ToLowerInvariant()
if ($ext -notin '.jpg', '.jpeg', '.png') { throw "Destination must be .jpg, .jpeg or .png" }

$original = [System.Drawing.Image]::FromFile($src)
try {
  # Turn the photo upright according to its EXIF orientation tag.
  $rotations = @{
    2 = 'RotateNoneFlipX'; 3 = 'Rotate180FlipNone'; 4 = 'Rotate180FlipX'; 5 = 'Rotate90FlipX'
    6 = 'Rotate90FlipNone'; 7 = 'Rotate270FlipX'; 8 = 'Rotate270FlipNone'
  }
  if ($original.PropertyIdList -contains 0x0112) {
    $orientation = [int]$original.GetPropertyItem(0x0112).Value[0]
    if ($rotations.ContainsKey($orientation)) {
      $original.RotateFlip([System.Drawing.RotateFlipType]::($rotations[$orientation]))
    }
  }

  $scale = [Math]::Min(1.0, $MaxSize / [double][Math]::Max($original.Width, $original.Height))
  $width = [int][Math]::Round($original.Width * $scale)
  $height = [int][Math]::Round($original.Height * $scale)

  # Drawing onto a new canvas leaves all metadata (including GPS) behind.
  $canvas = New-Object System.Drawing.Bitmap $width, $height
  $graphics = [System.Drawing.Graphics]::FromImage($canvas)
  try {
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($original, 0, 0, $width, $height)
  } finally {
    $graphics.Dispose()
  }

  New-Item -ItemType Directory -Force -Path (Split-Path -Parent $dest) | Out-Null
  try {
    if ($ext -eq '.png') {
      $canvas.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
    } else {
      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
      $params = New-Object System.Drawing.Imaging.EncoderParameters 1
      $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), ([long]$Quality)
      $canvas.Save($dest, $codec, $params)
    }
  } finally {
    $canvas.Dispose()
  }

  $kb = [int]((Get-Item -LiteralPath $dest).Length / 1KB)
  Write-Output ("Prepared {0} -> {1} ({2}x{3}, {4} KB, metadata removed)" -f $Source, $Destination, $width, $height, $kb)
} finally {
  $original.Dispose()
}
