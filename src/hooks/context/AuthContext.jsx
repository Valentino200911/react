import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const SESSION_KEY = "particularUser";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

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
