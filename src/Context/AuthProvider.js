import React, { createContext, useState, useContext, useEffect } from "react";
export const AuthContext = createContext();
export const AuthContextActions = createContext();
// const local_Storage_AUTH_KEY = "AuthState";
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("AuthState")) || false;
      if (userData) {
          setAuth(userData);
      }
      
  }, []);
  useEffect(() => {
      const data = JSON.stringify(auth);
      localStorage.setItem("AuthState", data);
  }, [auth]);
  return (
    <AuthContext.Provider value={auth}>
      <AuthContextActions.Provider value={setAuth}>
        {children}
      </AuthContextActions.Provider>
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextActions);
