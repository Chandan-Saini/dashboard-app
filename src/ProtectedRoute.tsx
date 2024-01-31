import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { selectToken } from './Pages/auth.selectors';
import { useSelector } from 'react-redux';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = useSelector(selectToken);

  return token ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
