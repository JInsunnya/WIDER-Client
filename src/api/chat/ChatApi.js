import axios from 'axios';

export const startChatApi = async (token) => {
    console.log('JWT 토큰:', token);
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/chat/start`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

export const respondChatApi = async (token, payload) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/chat/respond`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const endChatApi = async (token, payload) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/chat/end`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const getChatHistoryApi = async (sessionId, token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/chat/history/${sessionId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
