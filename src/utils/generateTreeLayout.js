import { seededRandom } from './seededRandom.js';

export default function generateTreeLayout(count = 24, seed = 1) {
  const random = seededRandom(seed);
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    x: 15 + random() * 70,
    y: 12 + random() * 65,
    size: 18 + random() * 18,
  }));
}
