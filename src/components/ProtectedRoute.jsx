// components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Assuming you have an AuthContext

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  // Assuming user is stored in AuthContext

  if (!user) {
    return <Navigate to="/login" />;  // Redirect to login page if not authenticated
  }

  return children;
};

export default ProtectedRoute;
