import { Product } from './types';
import bottleImage from './assets/images/regenerated_image_1777746486415.png';
const canImage = 'https://picsum.photos/seed/can/800/800';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '20L Purified Water Jar',
    description: 'Perfect for home and office use. Reusable vacuum-sealed jar with smart cap.',
    price: 80,
    image: canImage,
    category: 'Jar',
    unit: 'Per Jar',
    avgRating: 4.8,
    totalReviews: 156
  },
  {
    id: '2',
    name: '1L Mineral Bottle Pack',
    description: 'Refreshing mineral water in convenient 1L sizes. Pack of 12 bottles.',
    price: 240,
    image: bottleImage,
    category: 'Pack',
    unit: 'Box of 12',
    avgRating: 4.5,
    totalReviews: 89
  },
  {
    id: '3',
    name: '500ml Travel Pack',
    description: 'On-the-go hydration. 500ml bottles, easy to carry. Pack of 24 bottles.',
    price: 320,
    image: 'https://picsum.photos/seed/bottle-500ml/400/400',
    category: 'Pack',
    unit: 'Box of 24',
    avgRating: 4.7,
    totalReviews: 210
  },
  {
    id: '4',
    name: '5L Family Reserve',
    description: 'Large format bottle for families or small events. Easy-pour handle.',
    price: 65,
    image: 'https://picsum.photos/seed/bottle-5l/400/400',
    category: 'Bottle',
    unit: 'Per Bottle',
    avgRating: 4.6,
    totalReviews: 45
  },
  {
    id: '5',
    name: 'Sparkling Glass Pack',
    description: 'Premium carbonated mineral water in sustainable glass bottles. Pack of 6.',
    price: 450,
    image: 'https://picsum.photos/seed/glass-sparkling/400/400',
    category: 'Pack',
    unit: 'Pack of 6',
    avgRating: 4.9,
    totalReviews: 32
  },
  {
    id: '6',
    name: 'Alkaline pH+ Jar',
    description: 'Specialized alkaline water with 9.5+ pH for enhanced wellness. 20L.',
    price: 150,
    image: 'https://picsum.photos/seed/alkaline/400/400',
    category: 'Jar',
    unit: 'Per Jar',
    avgRating: 4.4,
    totalReviews: 18
  }
];

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", 
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
