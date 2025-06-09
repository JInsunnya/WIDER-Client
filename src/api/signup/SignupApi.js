import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const signupApi = async (data) => {
    console.log('API URL:', API);
    console.log('보내는 회원가입 데이터:', data);
    const response = await axios.post(`${API}/api/users/signup`, data);
    return response.data;
};
