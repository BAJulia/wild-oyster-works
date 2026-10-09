import type { Category, CategoryId } from './types';

export const categories: Category[] = [
  {
    id: 'functional-art',
    name: 'Functional Art',
    tagline: 'Furniture, transformed',
    description:
      'Hand-painted antique and vintage furniture — dressers, wardrobes, cabinets, and tables made into original works of art that remain in daily use.',
  },
  {
    id: 'living-art',
    name: 'Living Art',
    tagline: 'Botanical compositions',
    description:
      'Botanical arrangements, seasonal wreaths, floral designs, and nature-inspired compositions.',
  },
  {
    id: 'wall-art',
    name: 'Wall Art',
    tagline: 'Original paintings',
    description: 'Original paintings on canvas and other traditional painting surfaces.',
  },
  {
    id: 'wearable-art',
    name: 'Wearable Art',
    tagline: 'Painted to be worn',
    description: 'Hand-painted overalls and clothing — original artwork made to go out into the world.',
  },
];

export function getCategory(id: CategoryId): Category {
  const category = categories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}
