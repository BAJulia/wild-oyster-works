import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="page page-header">
      <p className="eyebrow">Not found</p>
      <h1>This room is empty</h1>
      <p className="lede">The page you were looking for isn't here.</p>
      <Link to="/gallery" className="button">
        Return to the gallery
      </Link>
    </div>
  );
}
