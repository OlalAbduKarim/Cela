
import { EventCategory, Event, Letter } from './types';

export const ADMIN_PASSWORD = 'Cela@christ7'; // Simple password for demo purposes
export const AUTH_KEY = 'cela_admin_auth';

export const EVENT_CATEGORIES: EventCategory[] = [
  EventCategory.TOURISM,
  EventCategory.PARTIES,
  EventCategory.TRAVELS,
  EventCategory.TOURS,
  EventCategory.FESTIVALS,
];

export const INITIAL_EVENTS: Event[] = [
  {
    id: 'murchison2025',
    title: 'Ramble to Murchison',
    category: EventCategory.TOURS,
    date: '2025-06-20', // Start date of 20th-22nd June 2025
    location: 'Murchison Falls National Park',
    descriptionShort: 'Experience a 3-day & 2-night thrilling adventure at Murchison Falls National Park. Includes game drives, boat cruises, chimpanzee trekking, and more!',
    descriptionFull: `Embark on an unforgettable 3-day and 2-night "Ramble to Murchison" at the majestic Murchison Falls National Park!

**Activities:**
*   Game drive to spot diverse wildlife
*   Boat cruise along the Nile to watch hippos and other aquatic life
*   Chimpanzee trekking in Budongo Forest
*   Bird watching
*   Visit to the breathtaking Top of the Murchison Falls
*   Guided nature walks

**Fee Includes:**
*   Accommodation (sharing basis)
*   Transportation
*   Meals
*   All listed activities

**Trip Fees:** 350,000 UGX
**Booking Fee:** 100,000 UGX

**Pick-up & Departure:**
*   Station: Oryx Fuel Station, Lugogo Forest Mall
*   Departure Time: 8:00 AM

This trip is presented by CELA TRIPS.
For Bookings & Payments, Contact/Call/WhatsApp: +256 768 587 590 or +256 707 589 256.
Twitter: @cela_trips`,
    images: ['https://picsum.photos/seed/murchison_falls_uganda_gamepark/800/600'], // Updated placeholder
    featured: true,
  }
];

export const INITIAL_LETTERS: Letter[] = [
  {
    id: 'l1',
    title: 'Welcome to CELA EVENTS!',
    content: 'We are thrilled to launch CELA EVENTS, your premier partner for unforgettable experiences. Explore our offerings and get ready for excitement!',
    publishDate: '2024-05-01',
    author: 'The CELA Team'
  },
  {
    id: 'l2',
    title: 'New Summer Events Announced',
    content: 'Get ready for a sizzling summer! We\'ve just added a host of new parties, tours, and festivals to our lineup. Check out the Events page for more details and book your spot today. Adventure awaits!',
    publishDate: '2024-05-15',
    author: 'Event Coordination'
  }
];
