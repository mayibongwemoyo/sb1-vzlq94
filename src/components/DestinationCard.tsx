import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  description: string;
}

export default function DestinationCard({ image, title, location, rating, description }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700">
          Explore
        </button>
      </div>
    </div>
  );
}