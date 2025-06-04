import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './SettingStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';

const Setting = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword1: '',
        newPassword2: '',
    });

    const goToTermsPage = () => {
        navigate('/termspage');
    };

    const togglePasswordBox = () => {
        setShowPasswordBox((prev) => !prev);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <S.Container>
            <HomeDeskHeader />
            <S.Content>
                <S.Section>
                    <S.SectionTitle>계정</S.SectionTitle>
                    <S.Box>
                        <S.ItemRow $nonHover>
                            <span>아이디</span>
                            <span style={{ color: '#aaa' }}>{user.id}</span>
                        </S.ItemRow>
                        <S.ItemRow onClick={togglePasswordBox}>비밀번호 변경</S.ItemRow>
                        {showPasswordBox && (
                            <S.PasswordBox>
                                <S.PasswordInput
                                    type="password"
                                    name="currentPassword"
                                    placeholder="현재 비밀번호"
                                    value={passwords.currentPassword}
                                    onChange={handleInputChange}
                                />
                                <S.PasswordInput
                                    type="password"
                                    name="newPassword1"
                                    placeholder="새 비밀번호"
                                    value={passwords.newPassword1}
                                    onChange={handleInputChange}
                                />
                                <S.PasswordInput
                                    type="password"
                                    name="newPassword2"
                                    placeholder="새 비밀번호 확인"
                                    value={passwords.newPassword2}
                                    onChange={handleInputChange}
                                />
                                <S.SubmitButton>변경하기</S.SubmitButton>
                            </S.PasswordBox>
                        )}
                    </S.Box>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>서비스</S.SectionTitle>
                    <S.Box>
                        <S.ItemRow onClick={goToTermsPage}>서비스 이용 약관</S.ItemRow>
                        <S.ItemRow>로그아웃</S.ItemRow>
                        <S.ItemRow>회원 탈퇴</S.ItemRow>
                    </S.Box>
                </S.Section>
            </S.Content>
            <Sidebar />
        </S.Container>
    );
};
export default Setting;
