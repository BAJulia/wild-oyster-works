import { useEffect, useRef, useState } from 'react';
import type { ArtImage as ArtImageData } from '../data/types';
import { ArtImage } from './ArtImage';

interface Props {
  images: ArtImageData[];
  /** Label for the group, used by screen readers. */
  label: string;
}

/** A grid of captioned photographs. Selecting one opens it full-size. */
export function PhotoGrid({ images, label }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  if (images.length === 0) return null;
  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <ul className={`photo-grid photo-grid--${Math.min(images.length, 4)}`} aria-label={label}>
        {images.map((image, i) => (
          <li key={image.src}>
            <figure>
              <button type="button" className="photo-grid__button" onClick={() => setOpenIndex(i)}>
                <ArtImage image={image} />
                <span className="visually-hidden">View larger</span>
              </button>
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={current?.caption ?? 'Photograph'}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIndex(null);
        }}
      >
        {current && (
          <figure>
            <ArtImage image={current} fit="contain" eager />
            {current.caption && <figcaption>{current.caption}</figcaption>}
          </figure>
        )}
        <button type="button" className="lightbox__close" onClick={() => setOpenIndex(null)}>
          Close
        </button>
      </dialog>
    </>
  );
}
