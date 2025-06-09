import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const changePasswordApi = async (passwordData, token) => {
    const response = await axios.post(`${API}/api/users/changePassword`, passwordData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    console.log('비밀번호 변경 요청 토큰:', token);
    return response.data;
};
