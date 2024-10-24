import { Destination } from './types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Serengeti National Park',
    country: 'Tanzania',
    description: 'Experience the great migration and witness Africa\'s incredible wildlife in their natural habitat.',
    imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
    rating: 4.9,
    activities: ['Safari', 'Wildlife Photography', 'Balloon Rides', 'Cultural Tours'],
    bestTimeToVisit: ['June', 'July', 'August', 'September']
  },
  {
    id: '2',
    name: 'Victoria Falls',
    country: 'Zimbabwe/Zambia',
    description: 'Marvel at one of the world\'s largest waterfalls, known locally as "The Smoke that Thunders".',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
    rating: 4.8,
    activities: ['Waterfall Viewing', 'Bungee Jumping', 'River Rafting', 'Helicopter Tours'],
    bestTimeToVisit: ['April', 'May', 'June', 'July']
  },
  {
    id: '3',
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Explore the stunning coastal city with its iconic Table Mountain and rich cultural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53',
    rating: 4.7,
    activities: ['Table Mountain Hiking', 'Wine Tasting', 'Beach Activities', 'Cultural Tours'],
    bestTimeToVisit: ['March', 'April', 'September', 'October']
  }
];