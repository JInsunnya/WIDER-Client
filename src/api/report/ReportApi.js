import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const generateReportApi = async (sessionId, token, reportData) => {
    const response = await axios.post(`${API}/api/report/generate/${sessionId}`, reportData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const getReportBySessionIdApi = async (sessionId, token) => {
    const response = await axios.get(`${API}/api/report/${sessionId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
