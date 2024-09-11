import axios from 'axios';

const USER_API_URL = 'http://127.0.0.1:8000/api/users';
const URL_API_URL = 'http://127.0.0.1:8000/api';

const userApiClient = axios.create({
    baseURL: USER_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const urlApiClient = axios.create({
    baseURL: URL_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

urlApiClient.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const loginUser = async (email, password) => {
    try {
        const response = await userApiClient.post('/login/', { email, password });
        return response.data;
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'An error occurred during login');
    }
};

export const registerUser = async (username, email, password) => {
    try {
        const response = await userApiClient.post('/register/', { username, email, password });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error in registerUser:", error.response?.data || error.message);
        return { success: false, error: error.response?.data || 'An unexpected error occurred. Please try again.' };
    }
};

export const getUserUrls = async () => {
    try {
        const response = await urlApiClient.get('/all-urls/');
        return response.data;
    } catch (error) {
        console.error('Error fetching user URLs:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to fetch user URLs');
    }
};

export const deleteUserUrl = async (id) => {
    try {
        const response = await urlApiClient.delete(`/urls/${id}/delete/`);
        return response.data;
    } catch (error) {
        console.error("Error deleting URL:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Failed to delete URL');
    }
};

