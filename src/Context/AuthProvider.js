import React, { createContext, useState, useContext } from "react";
    export const AuthContext = createContext();
    export const AuthContextActions = createContext();
const AuthProvider = ({children}) => {
    const [auth,setAuth]=useState(null);
    return ( 
        <AuthContext.Provider value={auth}>
            <AuthContextActions.Provider value={setAuth}>
                {children}
            </AuthContextActions.Provider>
        </AuthContext.Provider>
     );
} 
export default AuthProvider;


export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextActions);
