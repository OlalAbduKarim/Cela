
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Cog6ToothIcon, DocumentTextIcon, CalendarIcon, ArrowRightOnRectangleIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, onLogout }) => {
  const navigate = ReactRouterDOM.useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', to: '/admin/dashboard', icon: Squares2X2Icon },
    // { name: 'Manage Events', to: '/admin/events', icon: CalendarIcon }, // Can be sections in dashboard
    // { name: 'Manage Letters', to: '/admin/letters', icon: DocumentTextIcon }, // Can be sections in dashboard
    // { name: 'Settings', to: '/admin/settings', icon: Cog6ToothIcon }, // Future placeholder
  ];

  return (
    <div className="min-h-screen flex bg-neutral-light">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-dark text-neutral-light p-6 space-y-6 fixed h-full shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-white">CELA ADMIN</h1>
        </div>
        <nav className="space-y-2">
          {navItems.map(item => (
            <ReactRouterDOM.NavLink
              key={item.name}
              to={item.to}
              end // Use 'end' for Dashboard to avoid matching sub-routes
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'}`
              }
            >
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </ReactRouterDOM.NavLink>
          ))}
        </nav>
        <div className="pt-4 mt-auto border-t border-neutral-700">
           <button
            onClick={handleLogoutClick}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-neutral-300 hover:bg-neutral-700 hover:text-white w-full transition-colors"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
