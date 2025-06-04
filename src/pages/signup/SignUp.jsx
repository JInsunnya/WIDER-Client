import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Su from './SignUpStyles.jsx';
import AuthHeader from '../../components/header/AuthHeader';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/userSlice';

const SignUp = () => {
    const [gender, setGender] = useState(null);
    const [form, setForm] = useState({
        user_id: '',
        password: '',
        birth_date: '',
        gender: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setForm({ ...form, gender: selectedGender === 'male' ? '남' : '여' });
    };

    const handleSignup = () => {
        if (!form.user_id || !form.password || !form.birth_date || !form.gender) {
            alert('모든 항목을 입력해 주세요.');
            return;
        }

        dispatch(signup(form)).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
                navigate('/onboarding');
            } else {
                alert('회원가입 실패: ' + (res.payload?.message || '에러 발생'));
            }
        });
    };

    const goToOnboarding = () => {
        navigate('/onboarding');
    };

    return (
        <Su.Container>
            <AuthHeader />
            <Su.Content>
                <Su.Text>성별 선택</Su.Text>
                <Su.GenderSelectButton>
                    <Su.GenderButton isSelected={gender === 'male'} onClick={() => handleGenderSelect('male')}>
                        남
                    </Su.GenderButton>
                    <Su.GenderButton isSelected={gender === 'female'} onClick={() => handleGenderSelect('female')}>
                        여
                    </Su.GenderButton>
                </Su.GenderSelectButton>
                <Su.Text>생년월일</Su.Text>
                <Su.Input name="birth_date" value={form.birth_date} onChange={handleChange} placeholder="20200101" />
                <Su.Text>아이디</Su.Text>
                <Su.Input name="user_id" value={form.user_id} onChange={handleChange} placeholder="hellowider25" />
                <Su.Text>비밀번호</Su.Text>
                <Su.Input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호를 입력하세요"
                />
                <Su.StartButton
                    // onClick={goToOnboarding}
                    onClick={handleSignup}
                >
                    WIDER 시작하기
                </Su.StartButton>
            </Su.Content>
        </Su.Container>
    );
};

export default SignUp;
