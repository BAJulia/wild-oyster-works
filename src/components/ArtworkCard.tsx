import { Link } from 'react-router-dom';
import type { Artwork } from '../data/types';
import { getCategory } from '../data/categories';
import { ArtImage } from './ArtImage';

export function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="artwork-card">
      <Link to={`/gallery/${artwork.slug}`} className="artwork-card__link">
        <div className="artwork-card__frame">
          <ArtImage image={artwork.featuredImage} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" />
        </div>
        <div className="artwork-card__meta">
          <h3 className="artwork-card__title">{artwork.title}</h3>
          <p className="artwork-card__category">
            {getCategory(artwork.category).name}
            {artwork.awards?.length ? <span className="artwork-card__award"> · Award-winning</span> : null}
          </p>
        </div>
      </Link>
    </article>
  );
}
