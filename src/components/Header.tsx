import React from 'react';
import { Compass, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Compass className="w-8 h-8 text-orange-600" />
          <span className="text-xl font-bold text-gray-800">AfricaGo</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#destinations" className="text-gray-600 hover:text-orange-600">Destinations</a>
          <a href="#planner" className="text-gray-600 hover:text-orange-600">Trip Planner</a>
          <a href="#guides" className="text-gray-600 hover:text-orange-600">Travel Guides</a>
          <a href="#about" className="text-gray-600 hover:text-orange-600">About</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
            Plan Your Trip
          </button>
          <User className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Menu className="w-6 h-6 text-gray-600 md:hidden cursor-pointer" />
        </div>
      </div>
    </header>
  );
}