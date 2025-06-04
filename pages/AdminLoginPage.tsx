
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/24/solid';

interface AdminLoginPageProps {
  onLogin: (password: string) => boolean;
  isAuthenticated: boolean;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin, isAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = ReactRouterDOM.useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (onLogin(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <LockClosedIcon className="mx-auto h-12 w-auto text-secondary" />
          <h2 className="mt-6 text-center text-3xl font-extrabold font-heading text-neutral-dark">
            Admin Access
          </h2>
          <p className="mt-2 text-center text-sm text-neutral">
            Enter your password to manage CELA EVENTS.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-300 placeholder-neutral-500 text-neutral-dark focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
            >
              Sign In
            </button>
          </div>
        </form>
         <p className="mt-4 text-center text-xs text-neutral">
            Forgot password? Contact system administrator.
          </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
