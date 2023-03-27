import React from "react";

export const AuthContext = React.createContext(null);

export default function AuthProvider({ children }) {
  const [token, setToken] = React.useState(null);
  const value = { token, setToken };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
