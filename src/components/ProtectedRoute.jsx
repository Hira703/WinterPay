// src/routes/ProtectedRoute.jsx or wherever your route components are located

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // You can show a loading spinner or splash screen while checking auth state
    return <div className="text-center p-4">Loading...</div>;
  }

  if (!user) {
    // Redirect to login and save the attempted route in `state.from`
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
