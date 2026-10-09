import type { Artwork, CategoryId } from './types';

/*
 * THE PORTFOLIO
 * -------------
 * To add a piece: copy an entry, give it a unique id and slug, and put its photographs in
 * public/images/artworks/<category folder>/. Only id, slug, title, category, description and
 * featuredImage are required — everything else can be left out.
 *
 * Titles below are WORKING TITLES taken from the photo filenames. Confirm or replace them.
 * Do not fill in price, dimensions, year or status until they are confirmed.
 */

const img = '/images/artworks';

export const artworks: Artwork[] = [
  // ---------------------------------------------------------------- Functional Art
  {
    id: 'aw-001',
    slug: 'the-clearing',
    title: 'The Clearing',
    category: 'functional-art',
    description:
      'A white horse in a sunlit woodland clearing, painted across the doors of a cedar wardrobe.',
    // TODO(owner): confirm medium wording, dimensions, year completed, status and price.
    medium: 'Painted cedar wardrobe',
    featured: true,
    featuredImage: {
      src: `${img}/the-clearing/TheClearing.jpeg`,
      alt: 'The Clearing: a cedar wardrobe whose two doors are painted with a forest of tall trees and shafts of sunlight, and a white horse walking through a meadow of small white flowers.',
    },
    inContextImages: [
      {
        src: '/images/artist/Artist-with-the-clearing-best-in-show-1.jpeg',
        alt: 'The artist standing beside The Clearing at the exhibition, with a Best in Show card on the wardrobe, as visitors photograph her.',
        caption: 'At the 2025 CDHR exhibition',
      },
    ],
    beforeImages: [
      {
        src: `${img}/the-clearing/498535672_1278797244246299_1698986257203216501_n.jpg`,
        alt: 'The unpainted cedar wardrobe in the studio, its doors showing the natural striped grain of the wood.',
        caption: 'The wardrobe as found',
      },
    ],
    processImages: [
      {
        src: `${img}/the-clearing/the-clearing-stubbed.png`,
        alt: 'The wardrobe doors masked with blue tape, with the first light of the clearing and the outline of the horse sketched onto the cedar.',
        caption: 'Blocking in the light and the horse',
      },
      {
        src: '/images/artist/Artist-with-the-clearing-in progress-1.jpeg',
        alt: 'The artist smiling as she leans out from behind the nearly finished painted wardrobe door.',
        caption: 'Nearly there',
      },
    ],
    videoLinks: [
      { title: 'The making of The Clearing', note: 'A film documenting the transformation is in progress.' },
    ],
    story: [
      'The Clearing began as a functional antique: a cedar wardrobe. Rather than covering the wood, the painting was made to live with it — the grain and warmth of the original cedar remain part of the finished piece, glowing through the trees and the shafts of light.',
      'Across the doors, a white horse walks out of the woods into a sunlit clearing. Open the wardrobe and it is still a wardrobe; close it and the room gains a window into the forest.',
      // TODO(owner): add the inspiration and backstory in your own words.
    ],
    awards: [
      { title: 'Best in Show', event: 'CDHR exhibition', year: 2025 },
      { title: "Viewers' Choice", event: 'CDHR exhibition', year: 2025 },
    ],
  },
  {
    id: 'aw-002',
    slug: 'alices-peacock',
    title: "Alice's Peacock",
    category: 'functional-art',
    description:
      'A peacock perched on a blossoming branch, its tail cascading down the drawers of a French-style chest.',
    medium: 'Painted chest of drawers',
    featured: true,
    featuredImage: {
      src: `${img}/functional/alices-peacock.jpeg`,
      alt: "Alice's Peacock: a five-drawer chest with curved legs painted in soft blue-grey, with a blue peacock perched on a branch of white blossoms, its long tail flowing down across the drawers.",
    },
  },
  {
    id: 'aw-003',
    slug: 'red-table-with-sunset',
    title: 'Red Table with Sunset',
    category: 'functional-art',
    description:
      'An oval table in deep red: roses bloom across the top, and a harbor sunset with sailboats glows along the apron.',
    medium: 'Painted oval side table',
    featuredImage: {
      src: `${img}/functional/end-table-red-with-sunset-scene2.jpeg`,
      alt: 'A red oval side table with turned legs, its top painted with pink roses and small white flowers, standing in front of a stone hearth.',
    },
    galleryImages: [
      {
        src: `${img}/functional/end-table-red-with-sunset-scene.jpeg`,
        alt: 'Close-up of the table apron, painted with three sailboats on golden water beneath a setting sun.',
        caption: 'Detail — the sunset along the apron',
      },
    ],
  },
  {
    id: 'aw-004',
    slug: 'quiet-canoe-paddle-in-mist',
    title: 'Quiet Canoe Paddle in Mist',
    category: 'functional-art',
    description: 'A lone paddler crosses a still, misty lake beneath a line of pines, painted across a pair of cupboard doors.',
    medium: 'Painted cupboard doors',
    featuredImage: {
      src: `${img}/functional/quiet-canoe-paddle-in-mist.jpeg`,
      alt: 'Cream-painted wall cupboard doors with a soft, misty scene of pine trees reflected in a lake and a single figure paddling a canoe.',
    },
  },
  {
    id: 'aw-005',
    slug: 'ship-in-moonlight-dresser',
    title: 'Ship in Moonlight',
    category: 'functional-art',
    description: 'A tall ship in silhouette under a moonlit sky, with moonlight scattering across the water on the lowest drawer.',
    medium: 'Painted chest of drawers',
    featured: true,
    featuredImage: {
      src: `${img}/functional/ship-in-moonlight-1.jpeg`,
      alt: 'An antique chest of drawers painted with a dark sailing ship against moonlit clouds, a distant sailboat, and silver moonlight on the sea across the bottom drawer.',
    },
  },
  {
    id: 'aw-006',
    slug: 'ship-in-moonlight-cabinet',
    title: 'Ship in Moonlight (Cabinet)',
    category: 'functional-art',
    description: 'A sailing ship under a breaking moonlit sky, painted across the doors of an antique cabinet.',
    medium: 'Painted cabinet',
    featuredImage: {
      src: `${img}/functional/ship-in-moonlight-2.jpeg`,
      alt: 'A wooden cabinet on turned legs whose two doors are painted with a sailing ship on silvery water beneath clouds and a glimpse of moon; a model ship sits on top.',
    },
  },
  {
    id: 'aw-007',
    slug: 'whale-below-storm',
    title: 'Whale Below the Storm',
    category: 'functional-art',
    description: 'A whale glides through deep blue water while a sailboat rides the storm above, on the drawers.',
    medium: 'Painted cabinet',
    featured: true,
    featuredImage: {
      src: `${img}/functional/whale-below-storm.jpeg`,
      alt: 'A deep blue two-door cabinet painted with a large whale swimming across both doors, and a stormy sky with a small sailboat across the two drawers above; paints and brushes lie in front.',
    },
  },
  {
    id: 'aw-008',
    slug: 'white-horse-dresser',
    title: 'White Horse Dresser',
    category: 'functional-art',
    description: "A horse's head in soft greys emerges from a white dresser, drawn across all five drawers.",
    medium: 'Painted chest of drawers',
    featuredImage: {
      src: `${img}/functional/white-horse-dresser.jpeg`,
      alt: 'A white five-drawer dresser with a large, softly shaded grey horse head painted across the drawers.',
    },
  },

  // ---------------------------------------------------------------- Living Art
  {
    id: 'la-001',
    slug: 'roses-and-winter-greens',
    title: 'Roses and Winter Greens',
    category: 'living-art',
    description: 'Orange-gold roses with pine, cedar, holly and red winterberry.',
    medium: 'Botanical arrangement',
    featuredImage: {
      src: `${img}/living/floralarrangement001.jpeg`,
      alt: "An arrangement of orange and yellow roses with pine, cedar, holly, baby's breath and red berries on a weathered wooden bench.",
    },
  },
  {
    id: 'la-002',
    slug: 'feathers-and-antlers',
    title: 'Feathers and Antlers',
    category: 'living-art',
    description: 'Peach roses, ferns and berries with turkey and pheasant feathers and shed antlers, set on a stone wall.',
    medium: 'Botanical arrangement',
    featured: true,
    featuredImage: {
      src: `${img}/living/floralarrangement002.jpeg`,
      alt: 'A long, low arrangement of peach roses, ferns, greenery and red berries with striped turkey feathers, pheasant tail feathers and antlers, resting on a lichen-covered stone wall.',
    },
  },
  {
    id: 'la-003',
    slug: 'harvest-roses',
    title: 'Harvest Roses',
    category: 'living-art',
    description: 'Red and magenta roses with artichokes, grapes, a pomegranate and kale in a long wooden bowl.',
    medium: 'Botanical arrangement',
    featuredImage: {
      src: `${img}/living/floralarrangement003.jpeg`,
      alt: 'A long wooden bowl filled with red roses, purple statice, artichokes, eggplant, grapes, a pomegranate and trailing kale, on a table before a paned window.',
    },
  },
  {
    id: 'la-004',
    slug: 'sunflowers-and-antlers',
    title: 'Sunflowers and Antlers',
    category: 'living-art',
    description: 'Sunflowers, thistle and purple bellflowers with pheasant feathers, framed by a pair of antlers.',
    medium: 'Botanical arrangement',
    featuredImage: {
      src: `${img}/living/floralarrangement004.jpeg`,
      alt: 'A sweeping arrangement of sunflowers, purple bellflowers, blue thistle, goldenrod and pheasant feathers, with two antlers and autumn leaves at its base.',
    },
  },
  {
    id: 'la-005',
    slug: 'grey-pumpkin-arrangement',
    title: 'Grey Pumpkin Arrangement',
    category: 'living-art',
    description: 'Pink roses, stock and sweet william spilling from a grey heirloom pumpkin.',
    medium: 'Botanical arrangement',
    featured: true,
    featuredImage: {
      src: `${img}/living/greypumpkinarrangement.jpeg`,
      alt: "A blue-grey pumpkin filled with pink roses, purple stock, baby's breath and curling vines, on a tray before a glowing fireplace.",
    },
  },
  {
    id: 'la-006',
    slug: 'evergreen-wreath',
    title: 'Evergreen Wreath',
    category: 'living-art',
    description: 'Juniper, pine and cedar with pinecones and clusters of red sumac.',
    medium: 'Seasonal wreath',
    featuredImage: {
      src: `${img}/living/wreath01.jpeg`,
      alt: 'A full evergreen wreath of juniper with blue berries, long pine needles, pinecones and red sumac, hanging on a studded wooden door.',
    },
  },
  {
    id: 'la-007',
    slug: 'pinecone-wreath',
    title: 'Pinecone Wreath',
    category: 'living-art',
    description: "Pinecones and cedar lightened with sprays of baby's breath.",
    medium: 'Seasonal wreath',
    featuredImage: {
      src: `${img}/living/wreath02.jpeg`,
      alt: "A wreath of pinecones, cedar and juniper with white baby's breath, hanging on a panelled wooden door with a red frame.",
    },
  },

  // ---------------------------------------------------------------- Wall Art
  {
    id: 'wa-001',
    slug: 'blue-jay',
    title: 'Blue Jay',
    category: 'wall-art',
    description: 'A blue jay on a branch beneath hanging wisteria, with water and evening light behind.',
    medium: 'Painting on canvas',
    featured: true,
    featuredImage: {
      src: `${img}/wall/bluejay.jpeg`,
      alt: 'A painting of a blue jay perched on a curving branch, framed by drooping lavender wisteria, with a calm shoreline and soft golden light in the background.',
    },
  },
  {
    id: 'wa-002',
    slug: 'whale-breach',
    title: 'Whale Breach',
    category: 'wall-art',
    description: 'A humpback breaks the surface in a burst of spray while the pod surfaces around it.',
    medium: 'Painting on canvas',
    featuredImage: {
      src: `${img}/wall/whale-breech.jpeg`,
      alt: 'A painting of a humpback whale leaping from a deep blue sea in a burst of white spray, with other whales surfacing and spouting nearby.',
    },
  },

  // ---------------------------------------------------------------- Wearable Art
  {
    id: 'we-001',
    slug: 'bluebird-overalls',
    title: 'Bluebird Overalls',
    category: 'wearable-art',
    description: 'Hand-painted canvas overalls with bluebirds front and back among drifts of blue and green blossom.',
    medium: 'Hand-painted overalls',
    featuredImage: {
      src: `${img}/wearable/bluebird-overalls-1.jpeg`,
      alt: 'The bib of tan canvas overalls hand-painted with an eastern bluebird and dabs of blue, green and white blossom.',
    },
    galleryImages: [
      {
        src: `${img}/wearable/bluebird-overalls-2.jpeg`,
        alt: 'The back of the overalls, painted with a second bluebird among blue blossom.',
        caption: 'The back',
      },
    ],
  },
  {
    id: 'we-002',
    slug: 'lion-overalls',
    title: 'Lion Overalls',
    category: 'wearable-art',
    description: 'A lion gazes out from the back pocket of grey overalls, with butterflies and blossom drifting up the straps.',
    medium: 'Hand-painted overalls',
    featuredImage: {
      src: `${img}/wearable/lion-overalls.jpeg`,
      alt: "The back of grey overalls hand-painted with a lion's face and mane around the pocket, and white butterflies and flowers along the strap.",
    },
  },
  {
    id: 'we-003',
    slug: 'panda-and-shark',
    title: 'Panda and Shark',
    category: 'wearable-art',
    description: 'A panda resting across white overalls, paired with a shark painted on denim shorts.',
    medium: 'Hand-painted clothing',
    featuredImage: {
      src: `${img}/wearable/panda-and-shark.jpeg`,
      alt: 'Two people by a pond: one in white overalls hand-painted with a giant panda among green bamboo, the other in denim shorts with a shark painted on the back pocket.',
    },
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksByCategory(category: CategoryId | 'all'): Artwork[] {
  return category === 'all' ? artworks : artworks.filter((a) => a.category === category);
}

export const featuredArtworks = artworks.filter((a) => a.featured);
