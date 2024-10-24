export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  activities: string[];
  bestTimeToVisit: string[];
}

export interface TripPlan {
  id: string;
  destinations: string[];
  startDate: string;
  endDate: string;
  budget: number;
  notes: string;
}