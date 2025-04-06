import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getACVbyCustAndIndustry = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/insight/acv-by-cust-and-industry`);
        return response.data;
    } catch (error) {
        console.error("Error fetching ACV by customer and industry data:", error);
        throw error;
    }
}

export const getTeamPerformanceByACVRange = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/insight/team-performance-by-acv-range`);
        return response.data;
    } catch (error) {
        console.error("Error fetching team performance by ACV range data:", error);
        throw error;
    }
}

export const getCustomerDistributionByIndustry = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/insight/customer-distribution-by-industry`);
        return response.data;
    } catch (error) {
        console.error("Error fetching customer distribution by industry data:", error);
        throw error;
    }
}

export const getACVRangeByIndustry = async () => {
    try {
        if (!API_URL) {
            throw new Error("API_URL is undefined. Check your environment variables.");
        }
        const response = await axios.get(`${API_URL}/api/insight/acv-range-by-industry`);
        return response.data;
    } catch (error) {
        console.error("Error fetching ACV range by industry data:", error);
        throw error;
    }
}