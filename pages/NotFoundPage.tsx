
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-neutral-light text-center px-4">
      <ExclamationCircleIcon className="h-24 w-24 text-secondary mb-6" />
      <h1 className="text-6xl font-extrabold font-heading text-neutral-dark mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-neutral-dark mb-3">Page Not Found</h2>
      <p className="text-lg text-neutral mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist. It might have been moved or deleted.
      </p>
      <ReactRouterDOM.Link
        to="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back to Homepage
      </ReactRouterDOM.Link>
    </div>
  );
};

export default NotFoundPage;
