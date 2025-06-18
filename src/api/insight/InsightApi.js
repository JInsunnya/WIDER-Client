import axios from 'axios';

export const getLevelProgressApi = async (token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/level-progress`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
