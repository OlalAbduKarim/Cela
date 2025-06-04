
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Event } from '../types';
import { CalendarIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/solid';

interface EventCardProps {
  event: Event;
  onBookTicket: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onBookTicket }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
      <ReactRouterDOM.Link to={`/events/${event.id}`} className="block">
        <img 
          className="w-full h-56 object-cover" 
          src={event.images[0] || 'https://picsum.photos/400/300'} 
          alt={event.title} 
        />
      </ReactRouterDOM.Link>
      <div className="p-6 flex flex-col flex-grow">
        <ReactRouterDOM.Link to={`/events/${event.id}`} className="block">
          <h3 className="text-xl font-semibold font-heading text-primary mb-2 hover:underline">{event.title}</h3>
        </ReactRouterDOM.Link>
        <span className="inline-block bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full uppercase mb-3 self-start">{event.category}</span>
        <div className="flex items-center text-sm text-neutral mb-2">
          <CalendarIcon className="h-5 w-5 mr-2 text-accent" />
          <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-neutral mb-3">
          <MapPinIcon className="h-5 w-5 mr-2 text-accent" />
          <span>{event.location}</span>
        </div>
        <p className="text-neutral-dark text-sm mb-4 flex-grow">{event.descriptionShort}</p>
        <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
           <ReactRouterDOM.Link 
            to={`/events/${event.id}`} 
            className="text-primary hover:underline text-sm font-medium text-center sm:text-left"
          >
            View Details
          </ReactRouterDOM.Link>
          <button
            onClick={() => onBookTicket(event)}
            className="w-full sm:w-auto bg-secondary hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
          >
            <TicketIcon className="h-5 w-5 mr-2" />
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
