import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/logos/error.svg'; // Adjust path if needed

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <img
        src={errorImage}
        alt="404 Not Found"
        className="w-72 md:w-96 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary text-white">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
