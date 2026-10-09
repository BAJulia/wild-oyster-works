// Checks the gallery content for mistakes that would break the site or confuse visitors.
// Read-only: it never changes any file.
//
//   npm run check:content
//
// Errors (exit code 1): duplicate ids/slugs, unknown categories, missing image files,
// missing alt text, stories linked to artworks that don't exist.
// Notes: information that is simply not filled in yet (year, dimensions, status...).

import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const { artworks } = await import('../src/data/artworks.ts');
const { stories } = await import('../src/data/stories.ts');
const { categories } = await import('../src/data/categories.ts');

const errors = [];
const notes = [];
const categoryIds = new Set(categories.map((c) => c.id));

function checkImage(owner, field, image) {
  if (!image || !image.src) {
    errors.push(`${owner}: ${field} has no src`);
    return;
  }
  if (!existsSync(join(root, 'public', image.src))) errors.push(`${owner}: ${field} file not found: ${image.src}`);
  if (!image.alt || !image.alt.trim()) errors.push(`${owner}: ${field} is missing alt text (${image.src})`);
}

function findDuplicates(values) {
  const seen = new Set();
  return [...new Set(values.filter((v) => (seen.has(v) ? true : (seen.add(v), false))))];
}

for (const dup of findDuplicates(artworks.map((a) => a.id))) errors.push(`Duplicate artwork id: ${dup}`);
for (const dup of findDuplicates(artworks.map((a) => a.slug))) errors.push(`Duplicate artwork slug: ${dup}`);
for (const dup of findDuplicates(stories.map((s) => s.slug))) errors.push(`Duplicate story slug: ${dup}`);

const imageFields = ['galleryImages', 'inContextImages', 'beforeImages', 'processImages'];

for (const a of artworks) {
  const owner = `Artwork "${a.title}" (${a.slug})`;
  if (!categoryIds.has(a.category)) errors.push(`${owner}: unknown category "${a.category}"`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.slug)) errors.push(`${owner}: slug should be lowercase words joined by hyphens`);
  if (!a.description?.trim()) errors.push(`${owner}: missing description`);
  checkImage(owner, 'featuredImage', a.featuredImage);
  for (const field of imageFields) (a[field] ?? []).forEach((img, i) => checkImage(owner, `${field}[${i}]`, img));

  const missing = ['medium', 'dimensions', 'year', 'status'].filter((f) => a[f] === undefined);
  if (missing.length) notes.push(`${owner}: not yet recorded: ${missing.join(', ')}`);
}

for (const s of stories) {
  const owner = `Story "${s.title}" (${s.slug})`;
  checkImage(owner, 'coverImage', s.coverImage);
  (s.images ?? []).forEach((img, i) => checkImage(owner, `images[${i}]`, img));
  if (s.relatedArtwork && !artworks.some((a) => a.slug === s.relatedArtwork)) {
    errors.push(`${owner}: relatedArtwork "${s.relatedArtwork}" does not exist`);
  }
}

console.log(`Checked ${artworks.length} artworks and ${stories.length} stories.`);
for (const c of categories) console.log(`  ${c.name}: ${artworks.filter((a) => a.category === c.id).length}`);

if (notes.length) {
  console.log(`\nNotes (${notes.length}):`);
  notes.forEach((n) => console.log(`  - ${n}`));
}
if (errors.length) {
  console.log(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  process.exit(1);
}
console.log('\nNo errors found.');
