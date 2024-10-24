import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import TripPlanner from './components/TripPlanner';
import { destinations } from './lib/data';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 py-16">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Plan Your Journey</h2>
            <TripPlanner />
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  {...destination}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;