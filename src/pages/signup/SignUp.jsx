import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Su from './SignUpStyles.jsx';
import AuthHeader from '../../components/header/AuthHeader';
const SignUp = () => {
    const [gender, setGender] = useState(null);

    const navigate = useNavigate();

    const goToOnboarding = () => {
        navigate('/onboarding');
    };

    return (
        <Su.Container>
            <AuthHeader />
            <Su.Content>
                <Su.Text>성별 선택</Su.Text>
                <Su.GenderSelectButton>
                    <Su.GenderButton isSelected={gender === 'male'} onClick={() => setGender('male')}>
                        남
                    </Su.GenderButton>
                    <Su.GenderButton isSelected={gender === 'female'} onClick={() => setGender('female')}>
                        여
                    </Su.GenderButton>
                </Su.GenderSelectButton>
                <Su.Text>생년월일</Su.Text>
                <Su.Input type="text" placeholder="20200101" />
                <Su.Text>아이디</Su.Text>
                <Su.Input type="text" placeholder="hellowider25" />
                <Su.Text>비밀번호</Su.Text>
                <Su.Input type="password" placeholder="비밀번호를 입력하세요" />
                <Su.StartButton onClick={goToOnboarding}>WIDER 시작하기</Su.StartButton>
            </Su.Content>
        </Su.Container>
    );
};

export default SignUp;
