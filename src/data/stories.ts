import type { Story } from './types';

/*
 * BEHIND THE CURTAIN — studio stories
 * -----------------------------------
 * Each story gets its own page at /behind-the-curtain/<slug>.
 * Photographs go in public/images/studio/ or public/images/works-in-progress/.
 * Link a story to a gallery piece with `relatedArtwork: '<artwork-slug>'`.
 */

export const stories: Story[] = [
  {
    slug: 'the-clearing-transformation',
    title: 'From cedar wardrobe to woodland clearing',
    kind: 'Furniture transformation',
    summary: 'How a plain cedar wardrobe became The Clearing — and kept the character of its original wood.',
    coverImage: {
      src: '/images/artworks/the-clearing/the-clearing-stubbed.png',
      alt: 'The wardrobe doors masked with blue tape, with the first light of the clearing and the outline of a horse sketched onto the cedar.',
    },
    body: [
      'The Clearing started as a cedar wardrobe with beautifully striped grain. The idea was not to disguise the furniture, but to let a painting grow out of it — so the grain and warmth of the cedar stay visible in the trees, the shafts of light and the shadows of the finished work.',
      'The first marks were light and loose: a pale opening in the forest, and the outline of the horse placed low on the right-hand door, where the eye would settle.',
      // TODO(owner): replace or extend with your own account of the process.
    ],
    images: [
      {
        src: '/images/artworks/the-clearing/498535672_1278797244246299_1698986257203216501_n.jpg',
        alt: 'The unpainted cedar wardrobe in the studio.',
        caption: 'Before',
      },
      {
        src: '/images/artworks/the-clearing/the-clearing-stubbed.png',
        alt: 'The doors taped off, with the clearing and horse sketched in.',
        caption: 'First marks',
      },
      {
        src: '/images/artist/Artist-with-the-clearing-in progress-1.jpeg',
        alt: 'The artist leaning out from behind the nearly finished painted door.',
        caption: 'Nearly there',
      },
      {
        src: '/images/artworks/the-clearing/TheClearing.jpeg',
        alt: 'The finished painted wardrobe.',
        caption: 'Finished',
      },
    ],
    relatedArtwork: 'the-clearing',
    videoLinks: [{ title: 'The making of The Clearing', note: 'Film in progress.' }],
  },
  {
    slug: 'on-the-workbench',
    title: 'On the workbench',
    kind: 'Works in progress',
    summary: 'Pieces waiting their turn in the studio — cedar wardrobes and a freshly base-coated cabinet.',
    coverImage: {
      src: '/images/works-in-progress/WIP-cedar-wardrobe-02.jpeg',
      alt: 'An unpainted cedar wardrobe with a scalloped top and black hinges, standing in the studio.',
    },
    body: [
      'Not everything in the studio is finished. These pieces are somewhere between found and transformed: cedar wardrobes with their grain still bare, and a cabinet that has just received its first coat of paint.',
      // TODO(owner): add notes on what each piece is becoming, if you would like to share.
    ],
    images: [
      {
        src: '/images/works-in-progress/WIP-cedar-wardrobe-02.jpeg',
        alt: 'A cedar wardrobe with a scalloped top and black hinges.',
        caption: 'Cedar wardrobe',
      },
      {
        src: '/images/works-in-progress/WIP-cedar-wardrobe-03.jpeg',
        alt: 'A second cedar wardrobe whose doors have been cleaned and partly stripped.',
        caption: 'Another cedar wardrobe, doors prepared',
      },
      {
        src: '/images/works-in-progress/WIP001.jpeg',
        alt: 'A two-door antique cabinet freshly painted in a flat taupe base coat.',
        caption: 'Base coat on',
      },
    ],
  },
  {
    slug: 'the-oyster-and-the-pearl',
    title: 'The oyster and the pearl',
    kind: 'Studio still life',
    summary: 'A pile of pearls spilling from an oyster shell, across a hand-painted table drawer.',
    coverImage: {
      src: '/images/studio/oysters-with-pearls-on-table.jpeg',
      alt: 'Pearls spilling from an oyster shell across a table, whose drawer is painted with a sailboat on a soft sea.',
    },
    body: [
      'A still life from the studio: an oyster shell overflowing with pearls, set on a table whose drawer is painted with a small sailboat on a pale sea.',
      // TODO(owner): if there is a story behind the name Wild Oyster Works, this is a lovely place to tell it.
    ],
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getStoriesForArtwork(artworkSlug: string): Story[] {
  return stories.filter((s) => s.relatedArtwork === artworkSlug);
}
