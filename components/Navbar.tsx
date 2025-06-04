
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const commonLinkClasses = "px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClasses = "bg-primary text-white";
  const inactiveLinkClasses = "text-neutral-dark hover:bg-neutral-light hover:text-primary";

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/events", text: "Events" },
    { to: "/letters", text: "Announcements" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <ReactRouterDOM.Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary">CELA EVENTS</h1>
            </ReactRouterDOM.Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <ReactRouterDOM.NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
                >
                  {link.text}
                </ReactRouterDOM.NavLink>
              ))}
              {isAuthenticated && (
                <>
                  <ReactRouterDOM.NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) => `${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} flex items-center`}
                  >
                    <UserCircleIcon className="h-5 w-5 mr-1" /> Admin
                  </ReactRouterDOM.NavLink>
                  <button
                    onClick={onLogout}
                    className={`${commonLinkClasses} ${inactiveLinkClasses} flex items-center`}
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" /> Logout
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-neutral-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <ReactRouterDOM.NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block ${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                {link.text}
              </ReactRouterDOM.NavLink>
            ))}
            {isAuthenticated && (
              <>
                <ReactRouterDOM.NavLink
                  to="/admin/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block ${commonLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} flex items-center`}
                >
                  <UserCircleIcon className="h-5 w-5 mr-1" /> Admin
                </ReactRouterDOM.NavLink>
                <button
                  onClick={() => { onLogout(); setIsOpen(false); }}
                  className={`block w-full text-left ${commonLinkClasses} ${inactiveLinkClasses} flex items-center`}
                >
                 <ArrowRightOnRectangleIcon className="h-5 w-5 mr-1" /> Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
