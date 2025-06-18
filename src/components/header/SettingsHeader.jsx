import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, serverLogout, logout, deleteUser } from '../../store/userSlice';
import * as Sh from './SettingsHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Rectangle from '../../assets/Rectangle.svg';
import Setting from '../../assets/Setting.png';

const SettingsHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.user);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [passwords, setPasswords] = useState({
        current_password: '',
        new_password1: '',
        new_password2: '',
    });
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteForm, setDeleteForm] = useState({
        user_id: '',
        password: '',
    });

    // const titleText =
    //     location.pathname === '/insight'
    //         ? 'WIDER와 함께한 사고 연습,\n그동안의 레벨 변화는 어땠을까요?'
    //         : location.pathname === '/insightchart'
    //         ? 'WIDER와 함께한 이번 달 사고 연습,\n내 사고 레벨은 어디쯤일까요?'
    //         : '리포트 기록을 확인해 보세요!';

    const path = location.pathname;

    let title = '나의 AI 파트너, WIDER와';
    let subtitle = '오늘의 대화를 시작해 보세요!';

    if (path === '/insight') {
        title = 'WIDER와 함께한 사고 연습';
        subtitle = '그동안의 레벨 변화는 어땠을까요?';
    } else if (path === '/insightchart') {
        title = 'WIDER와 함께한 이번 달 사고 연습';
        subtitle = '내 사고 레벨은 어디쯤일까요?';
    } else if (path !== '/home') {
        title = '이전 대화를 다시 보고 싶다면?';
        subtitle = '기록 목록에서 확인해 보세요!';
    }

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const goToTermsPage = () => {
        navigate('/termspage');
    };

    const handlePasswordChangeClick = () => {
        setShowDropdown(false);
        setShowPasswordBox(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitPasswordChange = async () => {
        console.log('현재 전달되는 토큰:', token);
        console.log('currentPassword:', passwords.current_password);
        console.log('newPassword1:', passwords.new_password1);
        console.log('newPassword2:', passwords.new_password2);

        try {
            const passwordData = {
                current_password: passwords.current_password,
                new_password1: passwords.new_password1,
                new_password2: passwords.new_password2,
            };

            console.log('비번 변경 요청에 사용할 토큰:', token);

            const resultAction = await dispatch(changePassword({ passwordData, token }));

            if (changePassword.fulfilled.match(resultAction)) {
                alert('비밀번호가 성공적으로 변경되었습니다.');
                setShowPasswordBox(false);
                setPasswords({
                    current_password: '',
                    new_password1: '',
                    new_password2: '',
                });
            } else {
                alert(resultAction.payload?.message || '비밀번호 변경 실패');
            }
        } catch (e) {
            alert('알 수 없는 에러가 발생했습니다.');
        }
    };

    const handleLogoutClick = () => {
        setShowDropdown(false);
        setShowLogoutConfirm(true);
    };

    const confirmLogout = async () => {
        try {
            localStorage.removeItem('latest_session_id');
            await dispatch(serverLogout(token));
            dispatch(logout());
            navigate('/');
        } catch (e) {
            alert('로그아웃 실패');
        }
    };

    // const confirmLogout = async () => {
    //     try {
    //         const sessionId = localStorage.getItem('latest_session_id');
    //         const sessionDate = localStorage.getItem('latest_session_date');

    //         localStorage.clear();

    //         if (sessionId) localStorage.setItem('latest_session_id', sessionId);
    //         if (sessionDate) localStorage.setItem('latest_session_date', sessionDate);

    //         await dispatch(serverLogout(token));
    //         dispatch(logout());
    //         navigate('/');
    //     } catch (e) {
    //         alert('로그아웃 실패');
    //     }
    // };

    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    const handleDeleteInputChange = (e) => {
        const { name, value } = e.target;
        setDeleteForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleConfirmDelete = async () => {
        if (!deleteForm.user_id || !deleteForm.password) {
            alert('아이디와 비밀번호를 입력해주세요.');
            return;
        }

        try {
            localStorage.removeItem('latest_session_id');
            await dispatch(deleteUser(deleteForm));
            dispatch(logout());
            navigate('/');
        } catch (e) {
            alert('회원 탈퇴 실패');
        }
    };

    return (
        <>
            <Sh.Container>
                <Sh.Left>
                    <Sh.Logo>
                        <img src={Logo} />
                    </Sh.Logo>
                    <Sh.Title>
                        <Sh.Rectangle>
                            <img src={Rectangle} />
                        </Sh.Rectangle>
                        <Sh.HeaderText
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Sh.ServiceName>{title}</Sh.ServiceName>
                            <Sh.ServiceTagline>{subtitle}</Sh.ServiceTagline>
                        </Sh.HeaderText>
                    </Sh.Title>
                </Sh.Left>
                <Sh.Right>
                    <Sh.Setting onClick={toggleDropdown}>
                        <img src={Setting} />
                    </Sh.Setting>
                </Sh.Right>
            </Sh.Container>
            {showDropdown && (
                <Sh.DropdownBox>
                    <Sh.SectionTitle>계정</Sh.SectionTitle>
                    <Sh.ItemRow nonHover>
                        <span>아이디</span> <span style={{ color: '#aaa' }}>{user.id}</span>
                    </Sh.ItemRow>
                    <Sh.ItemRow onClick={handlePasswordChangeClick}>비밀번호 변경</Sh.ItemRow>
                    {/* <Sh.ItemRow>채팅 알림 기능</Sh.ItemRow> */}
                    <Sh.SectionTitle>서비스</Sh.SectionTitle>
                    <Sh.ItemRow onClick={goToTermsPage}>서비스 이용 약관</Sh.ItemRow>
                    <Sh.ItemRow onClick={handleLogoutClick}>로그아웃</Sh.ItemRow>
                    <Sh.ItemRow
                        onClick={() => {
                            setShowDropdown(false);
                            setShowDeleteConfirm(true);
                        }}
                    >
                        회원탈퇴
                    </Sh.ItemRow>
                </Sh.DropdownBox>
            )}
            {showPasswordBox && (
                <Sh.PasswordOverlay>
                    <Sh.PasswordBox>
                        <Sh.Input
                            type="password"
                            name="current_password"
                            placeholder="현재 비밀번호"
                            value={passwords.current_password}
                            onChange={handleInputChange}
                        />
                        <Sh.Input
                            type="password"
                            name="new_password1"
                            placeholder="새 비밀번호"
                            value={passwords.new_password1}
                            onChange={handleInputChange}
                        />
                        <Sh.Input
                            type="password"
                            name="new_password2"
                            placeholder="새 비밀번호 확인"
                            value={passwords.new_password2}
                            onChange={handleInputChange}
                        />
                        <Sh.SubmitButton onClick={handleSubmitPasswordChange}>변경하기</Sh.SubmitButton>
                        <Sh.SubmitButton
                            onClick={() => {
                                setShowPasswordBox(false);
                                setShowDropdown(false);
                            }}
                        >
                            취소
                        </Sh.SubmitButton>
                    </Sh.PasswordBox>
                </Sh.PasswordOverlay>
            )}
            {showLogoutConfirm && (
                <Sh.PasswordOverlay>
                    <Sh.PasswordBox>
                        <Sh.ConfirmText>정말 로그아웃하시겠습니까?</Sh.ConfirmText>
                        <Sh.LogoutButton onClick={confirmLogout}>확인</Sh.LogoutButton>
                        <Sh.LogoutButton onClick={cancelLogout}>취소</Sh.LogoutButton>
                    </Sh.PasswordBox>
                </Sh.PasswordOverlay>
            )}
            {showLogoutConfirm && (
                <Sh.PasswordOverlay>
                    <Sh.PasswordBox>
                        <Sh.ConfirmText>정말 로그아웃하시겠습니까?</Sh.ConfirmText>
                        <Sh.LogoutButton onClick={confirmLogout}>확인</Sh.LogoutButton>
                        <Sh.LogoutButton onClick={cancelLogout}>취소</Sh.LogoutButton>
                    </Sh.PasswordBox>
                </Sh.PasswordOverlay>
            )}
            {showDeleteConfirm && (
                <Sh.PasswordOverlay>
                    <Sh.PasswordBox>
                        <Sh.ConfirmText>정말 탈퇴하시겠습니까?</Sh.ConfirmText>
                        <Sh.Input
                            type="text"
                            name="user_id"
                            placeholder="아이디 입력"
                            value={deleteForm.user_id}
                            onChange={handleDeleteInputChange}
                        />
                        <Sh.Input
                            type="password"
                            name="password"
                            placeholder="비밀번호 입력"
                            value={deleteForm.password}
                            onChange={handleDeleteInputChange}
                        />
                        <Sh.LogoutButton onClick={handleConfirmDelete}>탈퇴 확인</Sh.LogoutButton>
                        <Sh.LogoutButton onClick={() => setShowDeleteConfirm(false)}>취소</Sh.LogoutButton>
                    </Sh.PasswordBox>
                </Sh.PasswordOverlay>
            )}
        </>
    );
};
export default SettingsHeader;
