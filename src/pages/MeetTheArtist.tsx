import { Link } from 'react-router-dom';
import { ArtImage } from '../components/ArtImage';

const disciplines = [
  'Oil painting',
  'Furniture transformation',
  'Woodworking',
  'Botanical design',
  'Traditional craft techniques',
];

// TODO(owner): add the artist's name and replace this draft copy with your own words.
export function MeetTheArtist() {
  return (
    <div className="page artist">
      <header className="artist__intro">
        <div className="artist__portrait">
          <ArtImage
            image={{
              src: '/images/artist/Artist-with-the-clearing-in progress-1.jpeg',
              alt: 'The artist, smiling, leaning out from behind the painted door of The Clearing.',
            }}
            eager
          />
        </div>
        <div className="artist__text">
          <p className="eyebrow">Meet the artist</p>
          <h1>Finding the beauty already there</h1>
          <p className="lede">
            Wild Oyster Works is the studio of a painter and maker working in a historic New England setting.
          </p>
          <p>
            Her work moves between disciplines — from oil painting on canvas to transforming antique and vintage
            furniture, from woodworking to botanical arrangements and seasonal wreaths. What ties it together is a
            love of nature, history and craftsmanship, and a habit of looking at an ordinary object and seeing what it
            could become.
          </p>
          <p>
            A cedar wardrobe becomes a sunlit clearing. A chest of drawers becomes a moonlit sea. A pair of work
            overalls becomes a place for a bluebird to land.
          </p>
        </div>
      </header>

      <section className="section section--narrow" aria-labelledby="practice-heading">
        <h2 id="practice-heading" className="section-title">
          The practice
        </h2>
        <ul className="disciplines">
          {disciplines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </section>

      <section className="section artist__exhibition" aria-labelledby="exhibition-heading">
        <div className="artist__exhibition-image">
          <ArtImage
            image={{
              src: '/images/artist/Artist-with-the-clearing-best-in-show-1.jpeg',
              alt: 'The artist standing beside The Clearing at the exhibition as visitors take photographs.',
            }}
          />
        </div>
        <div>
          <h2 id="exhibition-heading" className="section-title">
            Recognition
          </h2>
          <p>
            <em>The Clearing</em> received Best in Show and Viewers' Choice at the 2025 CDHR exhibition.
          </p>
          <div className="button-row">
            <Link to="/gallery/the-clearing" className="button">
              See The Clearing
            </Link>
            <Link to="/inquiries?type=commission" className="text-link">
              Discuss a commission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
