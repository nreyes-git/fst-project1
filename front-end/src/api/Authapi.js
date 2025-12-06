// src/api/Authapi.js
import axios from "axios";
import { BASE_URL } from "./api_base.js";

export const handlelogin = async (username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/token/`, {
            username,
            password,
        });
        return response;
    } catch (error) {
        console.log("Login error:", error?.response?.data || error.message);
        throw error;
    }
};
