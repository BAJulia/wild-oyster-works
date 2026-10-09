/** Turns a path under /public (e.g. "/images/a.jpeg") into a URL that works wherever the site is hosted. */
export function assetUrl(path: string): string {
  if (/^[a-z]+:\/\//i.test(path)) return path;
  return encodeURI(import.meta.env.BASE_URL.replace(/\/$/, '') + path);
}

/** Full web address of a page on this site, e.g. pageUrl('/gallery/blue-jay'). */
export function pageUrl(path: string): string {
  return window.location.origin + import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
