import { Link, useParams } from 'react-router-dom';
import { artworks, getArtwork } from '../data/artworks';
import { getCategory } from '../data/categories';
import { getStoriesForArtwork } from '../data/stories';
import type { ArtworkStatus } from '../data/types';
import { ArtImage } from '../components/ArtImage';
import { PhotoGrid } from '../components/PhotoGrid';
import { VideoList } from '../components/VideoList';
import { NotFound } from './NotFound';

const statusLabels: Record<ArtworkStatus, string> = {
  available: 'Available',
  sold: 'Sold',
  'private-collection': 'In a private collection',
  'not-for-sale': 'Not for sale',
  'on-exhibition': 'On exhibition',
};

export function ArtworkDetail() {
  const { slug = '' } = useParams();
  const artwork = getArtwork(slug);
  if (!artwork) return <NotFound />;

  const category = getCategory(artwork.category);
  const stories = getStoriesForArtwork(artwork.slug);
  const hasJourney =
    !!artwork.beforeImages?.length || !!artwork.processImages?.length || !!artwork.videoLinks?.length || stories.length > 0;

  // Previous / next within the same collection.
  const siblings = artworks.filter((a) => a.category === artwork.category);
  const index = siblings.findIndex((a) => a.slug === artwork.slug);
  const prev = index > 0 ? siblings[index - 1] : undefined;
  const next = index < siblings.length - 1 ? siblings[index + 1] : undefined;

  const canInquire = artwork.status !== 'sold' && artwork.status !== 'not-for-sale' && artwork.status !== 'private-collection';
  const details: [string, string | undefined][] = [
    ['Medium', artwork.medium],
    ['Dimensions', artwork.dimensions],
    ['Year', artwork.year?.toString()],
    ['Status', artwork.status ? statusLabels[artwork.status] : undefined],
    ['Price', artwork.price],
  ];

  return (
    <article className="artwork">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/gallery">Gallery</Link> <span aria-hidden="true">/</span>{' '}
        <Link to={`/gallery?category=${category.id}`}>{category.name}</Link>
      </nav>

      <section className="artwork__hero">
        <div className="artwork__image">
          <ArtImage image={artwork.featuredImage} eager fit="contain" />
        </div>

        <div className="artwork__info">
          <p className="eyebrow">{category.name}</p>
          <h1>{artwork.title}</h1>
          <p className="lede">{artwork.description}</p>

          {artwork.awards?.length ? (
            <ul className="awards" aria-label="Awards">
              {artwork.awards.map((award) => (
                <li key={award.title}>
                  <span className="awards__title">{award.title}</span>
                  {[award.event, award.year].filter(Boolean).join(', ')}
                </li>
              ))}
            </ul>
          ) : null}

          <dl className="details">
            {details
              .filter(([, value]) => value)
              .map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
          </dl>

          <div className="button-row">
            {canInquire ? (
              <Link to={`/inquiries?type=purchase&artwork=${artwork.slug}`} className="button">
                Inquire about this piece
              </Link>
            ) : null}
            <Link to={`/inquiries?type=commission&artwork=${artwork.slug}`} className="text-link">
              Commission something similar
            </Link>
          </div>
        </div>
      </section>

      {artwork.galleryImages?.length ? (
        <section className="section section--tight" aria-labelledby="more-photos">
          <h2 id="more-photos" className="section-title">
            Details
          </h2>
          <PhotoGrid images={artwork.galleryImages} label={`More photographs of ${artwork.title}`} />
        </section>
      ) : null}

      {artwork.story?.length ? (
        <section className="section section--narrow artwork__story" aria-labelledby="story-heading">
          <h2 id="story-heading" className="section-title">
            About the piece
          </h2>
          {artwork.story.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </section>
      ) : null}

      {artwork.inContextImages?.length ? (
        <section className="section section--tight" aria-labelledby="context-heading">
          <h2 id="context-heading" className="section-title">
            In the world
          </h2>
          <PhotoGrid images={artwork.inContextImages} label={`${artwork.title} with the artist and on exhibition`} />
        </section>
      ) : null}

      {hasJourney ? (
        <section className="journey" aria-labelledby="journey-heading">
          <div className="journey__inner">
            <p className="eyebrow">Behind the curtain</p>
            <h2 id="journey-heading">The making of {artwork.title}</h2>

            {artwork.beforeImages?.length ? (
              <div className="journey__step">
                <h3>Before</h3>
                <PhotoGrid images={artwork.beforeImages} label="Before photographs" />
              </div>
            ) : null}

            {artwork.processImages?.length ? (
              <div className="journey__step">
                <h3>In progress</h3>
                <PhotoGrid images={artwork.processImages} label="Progress photographs" />
              </div>
            ) : null}

            {artwork.videoLinks?.length ? (
              <div className="journey__step">
                <h3>On film</h3>
                <VideoList videos={artwork.videoLinks} />
              </div>
            ) : null}

            {artwork.beforeImages?.length || artwork.processImages?.length ? (
              <div className="journey__step journey__final">
                <h3>The transformation</h3>
                <div className="journey__final-image">
                  <ArtImage image={artwork.featuredImage} fit="contain" />
                </div>
              </div>
            ) : null}

            {stories.map((story) => (
              <Link key={story.slug} to={`/behind-the-curtain/${story.slug}`} className="text-link">
                Read the studio story: {story.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="pager" aria-label={`More from ${category.name}`}>
        {prev ? (
          <Link to={`/gallery/${prev.slug}`} rel="prev">
            <span>Previous</span>
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/gallery/${next.slug}`} rel="next" className="pager__next">
            <span>Next</span>
            {next.title}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
