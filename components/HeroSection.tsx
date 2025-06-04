
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-neutral-dark text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/heroimage/1920/1080" 
          alt="Exciting event" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Experience <span className="text-secondary">Unforgettable</span> Moments
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-neutral-light">
          CELA EVENTS brings you the best in tourism, parties, travel, tours, and festivals. Discover your next adventure with us!
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <ReactRouterDOM.Link
              to="/events"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-neutral-dark bg-white hover:bg-neutral-light sm:px-8"
            >
              Explore Events
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link
              to="/letters"
              className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-orange-600 sm:px-8"
            >
              Latest News
            </ReactRouterDOM.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
