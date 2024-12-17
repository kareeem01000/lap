import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16"',
    brand: 'Apple',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80',
    category: 'Professional',
    specs: {
      processor: 'M2 Pro',
      ram: '32GB',
      storage: '1TB SSD',
      display: '16" Liquid Retina XDR',
      graphics: 'M2 Pro 19-core GPU',
    },
    description: 'Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever.',
    rating: 4.9,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Dell XPS 15',
    brand: 'Dell',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    category: 'Professional',
    specs: {
      processor: 'Intel Core i9-12900HK',
      ram: '32GB',
      storage: '1TB SSD',
      display: '15.6" 4K OLED',
      graphics: 'NVIDIA RTX 3050 Ti',
    },
    description: "The most powerful XPS laptop we have ever built, with high-performance processors and graphics.",
    rating: 4.8,
    reviews: 95,
  },
];