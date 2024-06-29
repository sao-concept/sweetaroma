// AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = (setUserData) => {
    setIsAuthenticated(false);
    setUserData(null); // Clear user data
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
