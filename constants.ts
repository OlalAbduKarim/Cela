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
    images: ['/assets/murchison-poster.jpg'], // Updated to use the local poster image
    featured: true,
  },
  {
    id: '1',
    title: 'Summer Beach Party',
    category: EventCategory.PARTIES,
    date: '2024-07-20',
    location: 'Sunset Beach',
    descriptionShort: 'The ultimate summer beach party with live DJs and bonfire.',
    descriptionFull: 'Join us for an unforgettable night at Sunset Beach! Experience the best summer party with top DJs, delicious food trucks, beach games, and a massive bonfire. Gates open at 6 PM. Don\'t miss out!',
    images: ['https://picsum.photos/seed/party1/800/600', 'https://picsum.photos/seed/party2/800/600', 'https://picsum.photos/seed/party3/800/600'],
    featured: true,
  },
  {
    id: '2',
    title: 'Mountain Hiking Tour',
    category: EventCategory.TOURS,
    date: '2024-08-05',
    location: 'Eagle Peak',
    descriptionShort: 'Explore breathtaking mountain trails with our guided hiking tour.',
    descriptionFull: 'Discover the stunning beauty of Eagle Peak on our guided hiking tour. Suitable for intermediate hikers, this tour covers scenic trails, waterfalls, and panoramic viewpoints. All gear provided. Duration: 6 hours.',
    images: ['https://picsum.photos/seed/tour1/800/600', 'https://picsum.photos/seed/tour2/800/600'],
  },
  {
    id: '3',
    title: 'City Lights Festival',
    category: EventCategory.FESTIVALS,
    date: '2024-09-15',
    location: 'Downtown Plaza',
    descriptionShort: 'A vibrant festival celebrating art, music, and culture.',
    descriptionFull: 'The City Lights Festival returns! Immerse yourself in a dazzling display of light installations, live music performances across multiple stages, art exhibitions, and a variety of international cuisines. A family-friendly event for all ages.',
    images: ['https://picsum.photos/seed/festival1/800/600', 'https://picsum.photos/seed/festival2/800/600', 'https://picsum.photos/seed/festival3/800/600'],
    featured: true,
  },
  {
    id: '4',
    title: 'Historical Landmarks Tour',
    category: EventCategory.TOURISM,
    date: '2024-10-10',
    location: 'Old Town District',
    descriptionShort: 'A guided walk through the city\'s most famous historical sites.',
    descriptionFull: 'Step back in time with our Historical Landmarks Tour. Our expert guides will lead you through the Old Town District, sharing fascinating stories behind ancient buildings, monuments, and hidden gems. Duration: 3 hours.',
    images: ['https://picsum.photos/seed/tourism1/800/600', 'https://picsum.photos/seed/tourism2/800/600'],
  },
  {
    id: '5',
    title: 'Weekend Getaway to the Countryside',
    category: EventCategory.TRAVELS,
    date: '2024-11-01',
    location: 'Green Valley Resort',
    descriptionShort: 'Relax and rejuvenate with a peaceful weekend trip.',
    descriptionFull: 'Escape the city bustle with our Weekend Getaway package to Green Valley Resort. Enjoy serene landscapes, nature walks, spa treatments, and gourmet local food. Package includes 2 nights accommodation and all meals.',
    images: ['https://picsum.photos/seed/travel1/800/600', 'https://picsum.photos/seed/travel2/800/600'],
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