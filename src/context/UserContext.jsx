import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [lastVisited, setLastVisited] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lastVisitedUser")) || null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("lastVisitedUser", JSON.stringify(lastVisited));
  }, [lastVisited]);

  return (
    <UserContext.Provider value={{ users, setUsers, lastVisited, setLastVisited }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
