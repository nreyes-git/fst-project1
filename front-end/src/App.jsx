import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Header from "./components/Header.jsx";
import NotFound from "./pages/NotFound.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { PrivateRoute } from "./context/PrivateRoute.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
