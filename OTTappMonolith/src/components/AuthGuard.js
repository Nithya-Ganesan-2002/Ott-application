import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * PUBLIC_INTERFACE
 * AuthGuard protects routes that require authentication. Redirects to /login if unauthenticated.
 */
export default function AuthGuard({ children }) {
  const {
    state: { user },
  } = useApp();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
