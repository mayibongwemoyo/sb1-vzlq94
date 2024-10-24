import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
          alt="African Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Discover the Magic of Africa
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Plan your perfect African adventure with personalized itineraries and local insights
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Where would you like to go?"
                  className="w-full p-2 border-b-2 border-gray-200 focus:border-orange-600 outline-none"
                />
              </div>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}