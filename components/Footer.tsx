
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Facebook", url: "#", icon: "FB" }, // Placeholder, update if FB link provided
    { name: "Instagram", url: "#", icon: "IG" }, // Placeholder, update if IG link provided
    { name: "Twitter", url: "https://twitter.com/cela_events", icon: "X" },
  ];

  return (
    <footer className="bg-neutral-dark text-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">CELA EVENTS</h2>
            <p className="text-sm text-neutral-300">
              Your partner for unforgettable tourism experiences, parties, travels, tours, and festivals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><ReactRouterDOM.Link to="/" className="text-neutral-300 hover:text-primary text-sm">Home</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/events" className="text-neutral-300 hover:text-primary text-sm">Events</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/letters" className="text-neutral-300 hover:text-primary text-sm">Announcements</ReactRouterDOM.Link></li>
              <li><ReactRouterDOM.Link to="/admin/login" className="text-neutral-300 hover:text-primary text-sm">Admin</ReactRouterDOM.Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-neutral-300 text-sm">Kampala, Uganda</p>
            <p className="text-neutral-300 text-sm">Email: <a href="mailto:celiacelacee@gmail.com" className="hover:text-primary">celiacelacee@gmail.com</a></p>
            <p className="text-neutral-300 text-sm">
              Phone: <a href="tel:+256707589256" className="hover:text-primary">+256 707 589 256</a> / <a href="tel:+256768587590" className="hover:text-primary">+256 768 587 590</a>
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                   aria-label={`Follow us on ${link.name}`}
                   className="text-neutral-300 hover:text-primary h-8 w-8 flex items-center justify-center border border-neutral-300 rounded-full hover:border-primary transition-colors">
                  <span className="text-xs">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} CELA EVENTS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
