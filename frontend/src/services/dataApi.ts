import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL; // Ensure the variable starts with VITE_


export const getTeam = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/data/team`);
        return response.data;
    } catch (error) {
        console.error("Error fetching teams data:", error);
        throw error;
    }
};

export const getACVRange = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/data/acv-range`);
        return response.data;
    } catch (error) {
        console.error("Error fetching ACV range data:", error);
        throw error;
    }
};

export const getAccountIndustry = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/data/account-industry`);
        return response.data;
    } catch (error) {
        console.error("Error fetching account industry data:", error);
        throw error;
    }
};

export const getCustomerType = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/data/customer-type`);
        return response.data;
    } catch (error) {
        console.error("Error fetching customer type data:", error);
        throw error;
    }
};