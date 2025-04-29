import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as On from './OnboardingStyles.jsx';
import Logo from '../../assets/Logo.png';

const Onboarding = () => {
    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/signup');
    };

    return (
        <On.Container>
            <On.LogoImg>
                <img src={Logo} />
            </On.LogoImg>
            <On.Title>
                내 생각을 키워주는 AI 파트너 <br />
                지금 시작해 보세요!
            </On.Title>
            <On.StartButton onClick={goToSignUp}>시작하기</On.StartButton>
            <On.Login>
                이미 계정이 있으신가요?
                <On.LoginButton>로그인</On.LoginButton>
            </On.Login>
        </On.Container>
    );
};
export default Onboarding;
