
import React from 'react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import { Event } from '../types';
import * as ReactRouterDOM from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/solid';

interface HomePageProps {
  events: Event[];
  onBookTicket: (event: Event) => void;
}

const HomePage: React.FC<HomePageProps> = ({ events, onBookTicket }) => {
  const featuredEvents = events.filter(event => event.featured).slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-heading text-neutral-dark sm:text-4xl flex items-center justify-center">
              <SparklesIcon className="h-10 w-10 text-secondary mr-3" />
              Featured Events
            </h2>
            <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
              Check out some of our most popular and upcoming events. There's something for everyone!
            </p>
          </div>
          {featuredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map(event => (
                <EventCard key={event.id} event={event} onBookTicket={onBookTicket} />
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral">No featured events available at the moment. Check back soon!</p>
          )}
          <div className="mt-12 text-center">
            <ReactRouterDOM.Link
              to="/events"
              className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              View All Events
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-heading text-neutral-dark sm:text-4xl">Why Choose CELA EVENTS?</h2>
            <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
              We curate unique and memorable experiences tailored to your desires.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-secondary text-white mx-auto">
                {/* Placeholder for icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A7.962 7.962 0 0112 2c2.21 0 4.207.877 5.657 2.343A7.962 7.962 0 0120 10c-2 0-2.994-1-2.986-2.986S17.657 18.657 17.657 18.657z" /></svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-primary mb-2">Unique Experiences</h3>
              <p className="text-neutral-dark text-sm">From thrilling adventures to relaxing getaways, we offer a diverse range of events.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-accent text-white mx-auto">
                 {/* Placeholder for icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-primary mb-2">Expert Planning</h3>
              <p className="text-neutral-dark text-sm">Our team meticulously plans every detail to ensure a seamless and enjoyable time.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-primary text-white mx-auto">
                 {/* Placeholder for icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold font-heading text-primary mb-2">Customer Satisfaction</h3>
              <p className="text-neutral-dark text-sm">We are committed to providing exceptional service and creating lasting memories.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
