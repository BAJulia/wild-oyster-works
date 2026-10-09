import { Link, useParams } from 'react-router-dom';
import { getStory } from '../data/stories';
import { getArtwork } from '../data/artworks';
import { ArtImage } from '../components/ArtImage';
import { PhotoGrid } from '../components/PhotoGrid';
import { VideoList } from '../components/VideoList';
import { NotFound } from './NotFound';

export function StoryPage() {
  const { slug = '' } = useParams();
  const story = getStory(slug);
  if (!story) return <NotFound />;
  const related = story.relatedArtwork ? getArtwork(story.relatedArtwork) : undefined;

  return (
    <article className="page studio story">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/behind-the-curtain">Behind the Curtain</Link>
      </nav>

      <header className="story__header">
        <p className="eyebrow">{story.kind}</p>
        <h1>{story.title}</h1>
        <p className="lede">{story.summary}</p>
      </header>

      <div className="story__cover">
        <ArtImage image={story.coverImage} eager fit="contain" />
      </div>

      <div className="section--narrow story__body">
        {story.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      {story.images?.length ? (
        <section className="section section--tight">
          <PhotoGrid images={story.images} label={`Photographs from ${story.title}`} />
        </section>
      ) : null}

      {story.videoLinks?.length ? (
        <section className="section section--tight section--narrow">
          <VideoList videos={story.videoLinks} />
        </section>
      ) : null}

      {related ? (
        <aside className="related">
          <div className="related__image">
            <ArtImage image={related.featuredImage} />
          </div>
          <div>
            <p className="eyebrow">See the finished piece</p>
            <h2>{related.title}</h2>
            <Link to={`/gallery/${related.slug}`} className="button">
              View in the gallery
            </Link>
          </div>
        </aside>
      ) : null}
    </article>
  );
}
