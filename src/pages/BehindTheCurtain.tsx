import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import { ArtImage } from '../components/ArtImage';

export function BehindTheCurtain() {
  return (
    <div className="page studio">
      <header className="studio-intro">
        <div className="studio-intro__text">
          <p className="eyebrow">Behind the curtain</p>
          <h1>Welcome to the studio</h1>
          <p className="lede">
            This is where the gallery pieces begin: old wardrobes waiting their turn, first sketches on bare cedar,
            armfuls of greenery, and a lot of paint. Pull up a stool.
          </p>
        </div>
        <div className="studio-intro__image">
          <ArtImage
            image={{
              src: '/images/studio/oysters-with-pearls-on-table.jpeg',
              alt: 'Pearls spilling from an oyster shell across a hand-painted table drawer.',
            }}
            eager
          />
        </div>
      </header>

      <section aria-labelledby="stories-heading">
        <h2 id="stories-heading" className="section-title">
          Studio stories
        </h2>
        <ul className="story-list">
          {stories.map((story) => (
            <li key={story.slug}>
              <Link to={`/behind-the-curtain/${story.slug}`} className="story-card">
                <div className="story-card__image">
                  <ArtImage image={story.coverImage} />
                </div>
                <div className="story-card__text">
                  <p className="story-card__kind">{story.kind}</p>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
