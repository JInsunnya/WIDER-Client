import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Ah from './AuthHeaderStyles.jsx';
import Back from '../../assets/Back.png';

const AuthHeader = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <Ah.Container>
            <Ah.Back onClick={handleBack}>
                <img src={Back} />
            </Ah.Back>
            <Ah.Title>회원 정보 입력</Ah.Title>
        </Ah.Container>
    );
};
export default AuthHeader;
