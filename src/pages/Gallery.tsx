import { useSearchParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { getArtworksByCategory } from '../data/artworks';
import type { CategoryId } from '../data/types';
import { ArtworkCard } from '../components/ArtworkCard';

type Filter = CategoryId | 'all';

export function Gallery() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('category');
  const active: Filter = categories.some((c) => c.id === requested) ? (requested as CategoryId) : 'all';
  const activeCategory = categories.find((c) => c.id === active);
  const works = getArtworksByCategory(active);

  const select = (filter: Filter) => {
    setParams(filter === 'all' ? {} : { category: filter }, { replace: true });
  };

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">The Gallery</p>
        <h1>{activeCategory ? activeCategory.name : 'Completed works'}</h1>
        <p className="lede">
          {activeCategory
            ? activeCategory.description
            : 'Original paintings, hand-painted furniture, botanical compositions and wearable art.'}
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter by collection">
        <button type="button" aria-pressed={active === 'all'} onClick={() => select('all')}>
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={active === category.id}
            onClick={() => select(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {works.length} {works.length === 1 ? 'work' : 'works'}
      </p>

      {works.length > 0 ? (
        <div className="artwork-grid">
          {works.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ) : (
        <p className="empty">New work in this collection is on its way.</p>
      )}
    </div>
  );
}
