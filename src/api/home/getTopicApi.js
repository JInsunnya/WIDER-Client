import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const getTodayTopicApi = async (token) => {
    const response = await axios.get(`${API}/api/chat/topic`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
