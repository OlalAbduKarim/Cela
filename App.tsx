
import React, { useState, useEffect, useCallback } from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import { Event, Letter, EventCategory } from './types';
import { INITIAL_EVENTS, INITIAL_LETTERS, AUTH_KEY, ADMIN_PASSWORD } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import LettersPage from './pages/LettersPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import Modal from './components/Modal';

const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <ReactRouterDOM.Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  const [events, setEvents] = useLocalStorage<Event[]>('cela_events', INITIAL_EVENTS);
  const [letters, setLetters] = useLocalStorage<Letter[]>('cela_letters', INITIAL_LETTERS);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useLocalStorage<boolean>(AUTH_KEY, false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [currentEventForBooking, setCurrentEventForBooking] = useState<Event | null>(null);

  const handleLogin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
  };
  
  const addEvent = (event: Omit<Event, 'id'>) => {
    setEvents(prev => [...prev, { ...event, id: Date.now().toString() }]);
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(prev => prev.map(event => event.id === updatedEvent.id ? updatedEvent : event));
  };

  const deleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const addLetter = (letter: Omit<Letter, 'id'>) => {
    setLetters(prev => [...prev, { ...letter, id: Date.now().toString() }]);
  };

  const updateLetter = (updatedLetter: Letter) => {
    setLetters(prev => prev.map(letter => letter.id === updatedLetter.id ? updatedLetter : letter));
  };

  const deleteLetter = (letterId: string) => {
    setLetters(prev => prev.filter(letter => letter.id !== letterId));
  };

  const openBookingModal = useCallback((event: Event) => {
    setCurrentEventForBooking(event);
    setBookingModalOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setBookingModalOpen(false);
    setCurrentEventForBooking(null);
  }, []);


  const MainLayout: React.FC = () => {
    const location = ReactRouterDOM.useLocation();
    const isAdminPage = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login';
    
    return (
      <div className="flex flex-col min-h-screen bg-neutral-light font-sans text-neutral-dark">
        {!isAdminPage && <Navbar isAuthenticated={isAdminAuthenticated} onLogout={handleLogout} />}
        <main className={`flex-grow ${!isAdminPage ? 'pt-16 md:pt-20' : ''}`}> {/* Adjust padding for navbar height */}
          <ReactRouterDOM.Outlet />
        </main>
        {!isAdminPage && <Footer />}
        {bookingModalOpen && currentEventForBooking && (
          <Modal isOpen={bookingModalOpen} onClose={closeBookingModal} title={`Book Tickets for ${currentEventForBooking.title}`}>
            <div className="text-neutral-dark">
              <p className="mb-4">To book your tickets for <strong>{currentEventForBooking.title}</strong>, please contact us through one of the following methods:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Email: <a href="mailto:book@celaevents.com" className="text-primary hover:underline">book@celaevents.com</a></li>
                <li>Phone: <a href="tel:+1234567890" className="text-primary hover:underline">+123-456-7890</a></li>
              </ul>
              <p>Please mention the event name and number of tickets required.</p>
              <p className="mt-4 text-sm text-neutral">We are currently developing an online booking system for your convenience. Thank you for your understanding!</p>
            </div>
          </Modal>
        )}
      </div>
    );
  };

  return (
    <ReactRouterDOM.HashRouter>
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route element={<MainLayout />}>
          <ReactRouterDOM.Route path="/" element={<HomePage events={events} onBookTicket={openBookingModal} />} />
          <ReactRouterDOM.Route path="/events" element={<EventsPage events={events} onBookTicket={openBookingModal} />} />
          <ReactRouterDOM.Route path="/events/:eventId" element={<EventDetailPage events={events} onBookTicket={openBookingModal} />} />
          <ReactRouterDOM.Route path="/letters" element={<LettersPage letters={letters} />} />
          
          <ReactRouterDOM.Route path="/admin/login" element={<AdminLoginPage onLogin={handleLogin} isAuthenticated={isAdminAuthenticated} />} />
          <ReactRouterDOM.Route 
            path="/admin" 
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <ReactRouterDOM.Navigate to="/admin/dashboard" replace />
              </ProtectedRoute>
            } 
          />
          <ReactRouterDOM.Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <AdminDashboardPage 
                  events={events} 
                  letters={letters}
                  onAddEvent={addEvent}
                  onUpdateEvent={updateEvent}
                  onDeleteEvent={deleteEvent}
                  onAddLetter={addLetter}
                  onUpdateLetter={updateLetter}
                  onDeleteLetter={deleteLetter}
                  onLogout={handleLogout}
                />
              </ProtectedRoute>
            } 
          />
          <ReactRouterDOM.Route path="*" element={<NotFoundPage />} />
        </ReactRouterDOM.Route>
      </ReactRouterDOM.Routes>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;
