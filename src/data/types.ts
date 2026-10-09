// Content model for Wild Oyster Works.
// Every optional field may be omitted; pages render only what is present.

export type CategoryId = 'functional-art' | 'living-art' | 'wall-art' | 'wearable-art';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
}

export interface ArtImage {
  /** Path under /public, e.g. "/images/artworks/the-clearing/finished.jpg" */
  src: string;
  /** Required: describes the image for screen readers. */
  alt: string;
  caption?: string;
}

export interface VideoLink {
  title: string;
  /** YouTube/Vimeo embed URL or a local file path. Omit while the video is still being made. */
  url?: string;
  note?: string;
}

export type ArtworkStatus =
  | 'available'
  | 'sold'
  | 'private-collection'
  | 'not-for-sale'
  | 'on-exhibition';

export interface Award {
  title: string;
  event?: string;
  year?: number;
}

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: CategoryId;
  /** One or two sentences shown beside the main image. */
  description: string;
  medium?: string;
  dimensions?: string;
  year?: number;
  status?: ArtworkStatus;
  /** Display string, e.g. "$4,200". Omit to show "Price on inquiry". */
  price?: string;
  featuredImage: ArtImage;
  /** Additional finished photographs and close-up details. */
  galleryImages?: ArtImage[];
  /** The artist with the piece, exhibition views. */
  inContextImages?: ArtImage[];
  beforeImages?: ArtImage[];
  processImages?: ArtImage[];
  videoLinks?: VideoLink[];
  /** Inspiration / backstory, one string per paragraph. */
  story?: string[];
  awards?: Award[];
  /** Shown in the homepage preview. */
  featured?: boolean;
  /** Marks temporary demo entries. Delete these once real work is added. */
  sample?: boolean;
}

export interface Story {
  slug: string;
  title: string;
  /** Short label, e.g. "Furniture transformation". */
  kind: string;
  summary: string;
  coverImage: ArtImage;
  body: string[];
  images?: ArtImage[];
  videoLinks?: VideoLink[];
  /** Slug of a related artwork in the gallery. */
  relatedArtwork?: string;
  sample?: boolean;
}
