import { useState } from 'react';
import type { ArtImage as ArtImageData } from '../data/types';
import { site } from '../data/site';
import { assetUrl } from '../data/assets';

interface Props {
  image: ArtImageData;
  className?: string;
  /** Load immediately (use for the first, most important image on a page). */
  eager?: boolean;
  /** How the photo fills its box: "cover" crops to fill, "contain" shows the whole piece. */
  fit?: 'cover' | 'contain';
  sizes?: string;
}

/**
 * Displays a photograph. If the file is missing, shows a labeled placeholder in development
 * (so empty slots are easy to spot) and nothing in production.
 */
export function ArtImage({ image, className = '', eager = false, fit = 'cover', sizes }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === image.src;

  if (failed) {
    if (!site.showMissingImageSlots) return null;
    return (
      <div className={`art-image art-image--missing ${className}`} role="img" aria-label={image.alt}>
        <span>Photograph to come</span>
        <small>{image.src}</small>
      </div>
    );
  }

  return (
    <img
      className={`art-image art-image--${fit} ${className}`}
      src={assetUrl(image.src)}
      alt={image.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sizes={sizes}
      onError={() => setFailedSrc(image.src)}
    />
  );
}
