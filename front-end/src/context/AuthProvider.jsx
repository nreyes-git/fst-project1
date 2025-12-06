// src/context/AuthProvider.jsx
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation(); // ✅ must CALL the hook

    useEffect(() => {
        const token = localStorage.getItem("access");
        setIsAuthenticated(!!token);
        setIsLoading(false);
    }, [location.pathname]); // ✅ re-check on route changes

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, isLoading, setIsLoading }}
        >
            {children}
        </AuthContext.Provider>
    );
};
