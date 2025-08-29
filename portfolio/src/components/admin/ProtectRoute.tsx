import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthHandler.js";
import { type ReactNode } from 'react';

interface ProtectProviderProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectProviderProps) => {
  const { isAuth, isLoad } = useAuth();

  if (isLoad) return <div>Loading...</div>; // or a spinner
  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;