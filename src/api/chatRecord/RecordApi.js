import axios from 'axios';

export const getRecordListApi = async (token) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/records`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
