import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Assuming you have an AuthContext

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  // Assuming user is stored in AuthContext
  const location = useLocation();  // Get the current location the user tried to access

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
