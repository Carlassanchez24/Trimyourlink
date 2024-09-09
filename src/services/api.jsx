import axios from "axios";

const API_URL = 'http://127.0.0.1:8000/api/users';

const URL_API_URL = 'http://127.0.0.1:8000/api/urls';



const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.error || 'An error occurred');
    }
};

export const registerUser = async (username, email, password) => {
    try {
        const response = await apiClient.post('/register/', { username, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in registerUser:", error.response?.data || error.message);

        if (error.response) {
            return { success: false, error: error.response.data };
        } else if (error.request) {
            return { success: false, error: 'Network error. Please try again later.' };
        } else {
            return { success: false, error: 'An unexpected error occurred. Please try again.' };
        }
    }
};


export const getUserUrls = async (accessToken) => {
    try {
        const response = await axios.get(`${URL_API_URL}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`, 
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user URLs:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to fetch URLs');
    }
};

export const deleteUserUrl = async (id, accessToken) => {
    try {
        const response = await axios.delete(`${URL_API_URL}/${id}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`, 
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting URL:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to delete URL');
    }
};