import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const logoutApi = async (token) => {
    const response = await axios.post(
        `${API}/api/users/logout`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};
