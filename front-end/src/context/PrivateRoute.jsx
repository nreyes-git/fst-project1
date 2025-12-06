// src/context/PrivateRoute.jsx
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-sm text-gray-600">Loading...</div>
            </div>
        );
    }

    return isAuthenticated ? children : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
