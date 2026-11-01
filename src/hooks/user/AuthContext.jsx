
import { createContext, useContext, useEffect, useState } from "react";

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

return ( <AuthContext.Provider 
          value={{user, login, logout, isAuthenticated: user !== null, isAdmin: user?.role === "admin"}}>

    {children}

</AuthContext.Provider>)

}
export default AuthContext

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
         throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }

    return context
}