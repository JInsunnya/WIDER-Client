import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const deleteUserApi = async ({ user_id, password }) => {
    const response = await axios.post(`${API}/api/users/deleteUser`, {
        user_id,
        password,
    });
    return response.data;
};
