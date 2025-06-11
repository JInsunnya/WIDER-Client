import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { serverLogout, logout, deleteUser, changePassword } from '../../store/userSlice';
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
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const [deleteId, setDeleteId] = useState('');
    const [deletePassword, setDeletePassword] = useState('');
    const [showDeleteBox, setShowDeleteBox] = useState(false);

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

    const handleLogout = async () => {
        const confirmed = window.confirm('정말 로그아웃하시겠습니까?');
        if (!confirmed) return;

        try {
            await dispatch(serverLogout(token));
            localStorage.removeItem('latest_session_id');
            dispatch(logout());
            navigate('/');
        } catch (e) {
            alert('로그아웃 실패');
        }
    };

    const handleDelete = async () => {
        const confirmed = window.confirm('정말 탈퇴하시겠습니까? 이 작업은 되돌릴 수 없습니다.');
        if (!confirmed) return;

        try {
            await dispatch(deleteUser({ user_id: user.id, password: deletePassword }));
            localStorage.removeItem('latest_session_id');
            dispatch(logout());
            navigate('/');
        } catch (e) {
            alert('회원 탈퇴 실패: ' + (e?.message || ''));
        }
    };

    const handleSubmitPasswordChange = async () => {
        try {
            const passwordData = {
                current_password: passwords.current_password,
                new_password1: passwords.new_password1,
                new_password2: passwords.new_password2,
            };

            const resultAction = await dispatch(changePassword({ passwordData, token }));

            if (changePassword.fulfilled.match(resultAction)) {
                alert('비밀번호가 성공적으로 변경되었습니다.');
                setPasswords({
                    current_password: '',
                    new_password1: '',
                    new_password2: '',
                });
                setShowPasswordBox(false);
            } else {
                alert(resultAction.payload?.message || '비밀번호 변경 실패');
            }
        } catch (e) {
            alert('알 수 없는 에러가 발생했습니다.');
        }
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
                                <S.SubmitButton onClick={handleSubmitPasswordChange}>변경하기</S.SubmitButton>
                            </S.PasswordBox>
                        )}
                    </S.Box>
                </S.Section>
                <S.Section>
                    <S.SectionTitle>서비스</S.SectionTitle>
                    <S.Box>
                        <S.ItemRow onClick={goToTermsPage}>서비스 이용 약관</S.ItemRow>
                        <S.ItemRow onClick={handleLogout}>로그아웃</S.ItemRow>
                        <S.ItemRow onClick={() => setShowDeleteBox(true)}>회원 탈퇴</S.ItemRow>
                        {showDeleteBox && (
                            <S.PasswordBox>
                                <S.PasswordInput
                                    type="text"
                                    placeholder="아이디 입력"
                                    value={deleteId}
                                    onChange={(e) => setDeleteId(e.target.value)}
                                />
                                <S.PasswordInput
                                    type="password"
                                    placeholder="비밀번호 입력"
                                    value={deletePassword}
                                    onChange={(e) => setDeletePassword(e.target.value)}
                                />
                                <S.SubmitButton onClick={handleDelete}>탈퇴하기</S.SubmitButton>
                            </S.PasswordBox>
                        )}
                    </S.Box>
                </S.Section>
            </S.Content>
            <Sidebar />
        </S.Container>
    );
};
export default Setting;
