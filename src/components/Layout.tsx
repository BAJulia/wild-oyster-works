import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { site } from '../data/site';

const navItems = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/behind-the-curtain', label: 'Behind the Curtain' },
  { to: '/artist', label: 'The Artist' },
  { to: '/inquiries', label: 'Inquiries' },
];

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu and return to the top whenever the page changes.
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  // The studio sections use a warmer palette.
  const isStudio = pathname.startsWith('/behind-the-curtain');

  return (
    <div className={`site ${isStudio ? 'site--studio' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="wordmark" aria-label={`${site.name} — home`}>
            Wild Oyster <span>Works</span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__bars" aria-hidden="true" />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>

          <nav id="site-nav" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div>
            <p className="wordmark wordmark--footer">
              Wild Oyster <span>Works</span>
            </p>
            <p className="site-footer__note">
              Original paintings, transformed furniture and botanical work from {site.location}.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="site-footer__legal">
          © {new Date().getFullYear()} {site.name}. All artwork and photographs are the property of the artist.
        </p>
      </footer>
    </div>
  );
}
