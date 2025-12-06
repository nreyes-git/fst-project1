// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handlelogin } from "../api/Authapi";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const submitLogin = async (e) => {
        e.preventDefault();
        if (loading) return;

        setError("");
        setLoading(true);

        try {
            const res = await handlelogin(username, password);

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            setIsAuthenticated(true); // ✅ update auth state immediately
            navigate("/profile");
        } catch (err) {
            setIsAuthenticated(false);
            setError(err?.response?.data?.detail || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={submitLogin}
                className="bg-white shadow-md rounded-md p-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-primary mb-4">Sign In</h2>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                        className="w-full border border-gray-300 p-2 rounded disabled:opacity-60"
                        placeholder="Enter your username"
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        className="w-full border border-gray-300 p-2 rounded disabled:opacity-60"
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                    />
                </div>

                {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-2 rounded hover:bg-primary-hover transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div className="mt-4 text-center">
                    <Link to="/register" className="text-sm text-gray-600 hover:underline">
                        Don’t have an account yet?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
