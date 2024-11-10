// StoreContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loggedIn, setLoggedIn] = useState(!!token);

  const logout = () => {
    setToken("");
    setLoggedIn(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setLoggedIn(true);
    }
  }, []);

  return (
    <StoreContext.Provider value={{ token, setToken, logout, loggedIn }}>
      {children}
    </StoreContext.Provider>
  );
};
