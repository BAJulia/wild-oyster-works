import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { categories } from '../data/categories';
import { artworks, featuredArtworks, getArtwork } from '../data/artworks';
import { ArtImage } from '../components/ArtImage';
import { ArtworkCard } from '../components/ArtworkCard';

const HERO_SLUG = 'the-clearing';

export function Home() {
  const hero = getArtwork(HERO_SLUG) ?? artworks[0];
  const preview = featuredArtworks.filter((a) => a.slug !== hero.slug).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero__art">
          <Link to={`/gallery/${hero.slug}`} className="hero__frame">
            <ArtImage image={hero.featuredImage} eager fit="cover" />
          </Link>
          <p className="hero__caption">
            <Link to={`/gallery/${hero.slug}`}>
              <em>{hero.title}</em>
            </Link>
            {hero.awards?.length ? ` — ${hero.awards.map((a) => a.title).join(' & ')}, ${hero.awards[0].year ?? ''}` : null}
          </p>
        </div>
        <div className="hero__text">
          <p className="eyebrow">Wild Oyster Works</p>
          <h1>{site.heroStatement}</h1>
          <p className="lede">{site.supportingStatement}</p>
          <Link to="/gallery" className="button">
            Enter the gallery
          </Link>
        </div>
      </section>

      <section className="section statement">
        <p>
          Paintings that hang on the wall, and paintings that open, close and hold your things. Wardrobes become
          woodland clearings; dressers become moonlit seas. Each piece is made by hand and meant to be lived with.
        </p>
      </section>

      <section className="section" aria-labelledby="selected-heading">
        <div className="section__head">
          <h2 id="selected-heading">Selected works</h2>
          <Link to="/gallery" className="text-link">
            View the full gallery
          </Link>
        </div>
        <div className="artwork-grid">
          {preview.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      <section className="section collections" aria-labelledby="collections-heading">
        <h2 id="collections-heading" className="visually-hidden">
          Collections
        </h2>
        <ul className="collections__list">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/gallery?category=${category.id}`}>
                <span className="collections__tagline">{category.tagline}</span>
                <span className="collections__name">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="curtain-invite" aria-labelledby="curtain-heading">
        <div className="curtain-invite__image">
          <ArtImage
            image={{
              src: '/images/studio/oysters-with-pearls-on-table.jpeg',
              alt: 'Pearls spilling from an oyster shell across a hand-painted table.',
            }}
          />
        </div>
        <div className="curtain-invite__text">
          <p className="eyebrow">Behind the curtain</p>
          <h2 id="curtain-heading">Step into the studio</h2>
          <p>
            Before every finished piece there is a found object, a first sketch, and a lot of paint. Come and see how
            the work is made.
          </p>
          <div className="button-row">
            <Link to="/behind-the-curtain" className="button button--light">
              Visit the studio
            </Link>
            <Link to="/artist" className="text-link text-link--light">
              Meet the artist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
