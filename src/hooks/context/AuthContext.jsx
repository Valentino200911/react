import { createContext, useEffect, useState } from "react";
import { SESSION_KEY } from "../../utils/constants";

export const AuthContext = createContext(null);

function readSavedSession() {
    try {
        return JSON.parse(sessionStorage.getItem(SESSION_KEY))
    } catch (error) {
        console.error(error)
        return null
    }
}

export function AuthProvider({ children }) {
  
    const [user, setUser] = useState(readSavedSession)
    const [error, setError] = useState(null)

  useEffect(() => {
    const storedUser = sessionStorage.getItem(SESSION_KEY);

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem(SESSION_KEY);
  };

  const value = {
        user,
        token: user?.token ?? null,
        login,
        logout,
        isAuthenticated: user !== null && user.role === "user",
        isAdmin: user?.role === "admin",
      }

  return (
    <AuthContext.Provider
      value={value}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
