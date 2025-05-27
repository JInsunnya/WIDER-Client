import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Sh from './SettingsHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Rectangle from '../../assets/Rectangle.svg';
import Setting from '../../assets/Setting.png';

const SettingsHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showDropdown, setShowDropdown] = useState(false);

    const titleText =
        location.pathname === '/insight'
            ? '상반기 히스토그램을 확인 해 보세요!'
            : location.pathname === '/insightchart'
            ? '월별 히스토그램을 확인해 보세요!'
            : '리포트 기록을 확인해 보세요!';

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const goToTermsPage = () => {
        navigate('/termspage');
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
                        <Sh.TitleText>{titleText}</Sh.TitleText>
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
                        <span>아이디</span> <span style={{ color: '#aaa' }}>b6shift5</span>
                    </Sh.ItemRow>
                    <Sh.ItemRow>비밀번호 변경</Sh.ItemRow>
                    <Sh.ItemRow>채팅 알림 기능</Sh.ItemRow>
                    <Sh.SectionTitle>서비스</Sh.SectionTitle>
                    <Sh.ItemRow onClick={goToTermsPage}>서비스 이용 약관</Sh.ItemRow>
                    <Sh.ItemRow>로그아웃</Sh.ItemRow>
                </Sh.DropdownBox>
            )}
        </>
    );
};
export default SettingsHeader;
