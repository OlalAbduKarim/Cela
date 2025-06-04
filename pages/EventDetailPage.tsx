
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Event } from '../types';
import { CalendarIcon, MapPinIcon, TicketIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import NotFoundPage from './NotFoundPage';

interface EventDetailPageProps {
  events: Event[];
  onBookTicket: (event: Event) => void;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ events, onBookTicket }) => {
  const { eventId } = ReactRouterDOM.useParams<{ eventId: string }>();
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReactRouterDOM.Link to="/events" className="inline-flex items-center text-primary hover:underline mb-8 group">
          <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to All Events
        </ReactRouterDOM.Link>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative">
             <img 
                className="w-full h-64 md:h-96 object-cover" 
                src={event.images[0] || 'https://picsum.photos/1200/800'} 
                alt={event.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <span className="inline-block bg-secondary text-white text-sm font-semibold px-3 py-1 rounded-full uppercase mb-2">{event.category}</span>
                <h1 className="text-3xl md:text-5xl font-bold font-heading text-white">{event.title}</h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center text-neutral-dark">
                <CalendarIcon className="h-8 w-8 mr-3 text-accent" />
                <div>
                  <p className="font-semibold">Date</p>
                  <p>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              <div className="flex items-center text-neutral-dark">
                <MapPinIcon className="h-8 w-8 mr-3 text-accent" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <div className="md:text-right">
                <button
                    onClick={() => onBookTicket(event)}
                    className="w-full md:w-auto bg-secondary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-lg"
                >
                    <TicketIcon className="h-6 w-6 mr-2" />
                    Book Ticket
                </button>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-neutral-dark leading-relaxed">
              <h2 className="text-2xl font-semibold font-heading text-primary mb-4">About this Event</h2>
              <p className="whitespace-pre-line">{event.descriptionFull}</p>
            </div>

            {event.images.length > 1 && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Image Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md aspect-w-1 aspect-h-1">
                      <img src={img} alt={`${event.title} gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
