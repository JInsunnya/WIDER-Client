import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const loginApi = async (data) => {
    try {
        console.log('로그인 요청 데이터:', {
            user_id: data.userId,
            password: data.password,
        });

        const response = await axios.post(
            `${API}/api/users/signin`,
            {
                user_id: data.userId,
                password: data.password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('로그인 응답:', response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('서버 응답 상태 코드:', error.response.status);
            console.error('서버 응답 메시지:', error.response.data);
        } else if (error.request) {
            console.error('요청은 갔지만 응답이 없음:', error.request);
        } else {
            console.error('기타 에러:', error.message);
        }
        throw error;
    }
};
