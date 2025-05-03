import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from './LoginStyles.jsx';
import AuthHeader from '../../components/header/AuthHeader';

const Login = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <L.Container>
            <AuthHeader />
            <L.Content>
                <L.Text>아이디</L.Text>
                <L.Input type="text" placeholder="hellowider25" />
                <L.Text>비밀번호</L.Text>
                <L.Input type="password" placeholder="비밀번호를 입력하세요" />
                <L.StartButton onClick={goToHome}>WIDER 시작하기</L.StartButton>
            </L.Content>
        </L.Container>
    );
};
export default Login;
