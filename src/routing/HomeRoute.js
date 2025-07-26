import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LandingPage from '../pages/LandingPage';
import HomePage from '../pages/HomePage';

const HomeRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return isAuthenticated ? <HomePage /> : <LandingPage />;
};

export default HomeRoute;
