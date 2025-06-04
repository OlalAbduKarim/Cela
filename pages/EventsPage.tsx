
import React, { useState, useMemo } from 'react';
import EventCard from '../components/EventCard';
import { Event, EventCategory } from '../types';
import { EVENT_CATEGORIES } from '../constants';
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface EventsPageProps {
  events: Event[];
  onBookTicket: (event: Event) => void;
}

const EventsPage: React.FC<EventsPageProps> = ({ events, onBookTicket }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
      const searchMatch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.descriptionShort.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [events, selectedCategory, searchTerm]);

  return (
    <div className="py-12 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold font-heading text-neutral-dark sm:text-5xl">Discover Our Events</h2>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Find your next adventure from our wide range of curated experiences.
          </p>
        </div>

        <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div className="md:col-span-2">
                    <label htmlFor="search" className="block text-sm font-medium text-neutral-dark mb-1">
                        <MagnifyingGlassIcon className="inline h-5 w-5 mr-1 text-neutral" />
                        Search Events
                    </label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by title, description, or location..."
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-neutral-dark mb-1">
                        <FunnelIcon className="inline h-5 w-5 mr-1 text-neutral" />
                        Filter by Category
                    </label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as EventCategory | 'all')}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary transition duration-150 bg-white"
                    >
                        <option value="all">All Categories</option>
                        {EVENT_CATEGORIES.map(category => (
                        <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>


        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} onBookTicket={onBookTicket} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <img src="https://picsum.photos/seed/empty/300/200" alt="No events found" className="mx-auto mb-4 rounded-lg opacity-75"/>
            <p className="text-xl text-neutral-dark font-semibold">No events match your criteria.</p>
            <p className="text-neutral">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
