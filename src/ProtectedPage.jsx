import { Navigate } from "react-router-dom";
import React from "react";
import { AuthContext } from "./AuthProvider";

export default function ProtectedPage({ children }) {
  const authContext = React.useContext(AuthContext);
  return authContext.token ? children : <Navigate to="/login" replace />;
}
