
export enum EventCategory {
  TOURISM = 'Tourism',
  PARTIES = 'Parties',
  TRAVELS = 'Travels',
  TOURS = 'Tours',
  FESTIVALS = 'Festivals',
}

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  date: string; // Consider using Date object if more complex date logic is needed
  location: string;
  descriptionShort: string;
  descriptionFull: string;
  images: string[]; // Array of image URLs
  featured?: boolean;
}

export interface Letter {
  id: string;
  title: string;
  content: string;
  publishDate: string; // Consider using Date object
  author?: string;
}
