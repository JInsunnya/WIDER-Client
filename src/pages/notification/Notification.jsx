import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as N from './NotificationStyles.jsx';
import LogoIcon from '../../assets/LogoIcon.png';
import ArrowLeft from '../../assets/ArrowLeft.png';
import Footer from '../../components/footer/Footer';
import RectangleHeader from '../../assets/RectangleHeader.svg';
import NotificationOn from '../../assets/NotificationOn.svg';
import NotificationOff from '../../assets/NotificationOff.svg';

const Notification = () => {
    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/chat');
    };

    const goToHome = () => {
        navigate('/home');
    };

    return (
        <N.Container>
            <N.Header>
                <N.ArrowLeft onClick={goToHome}>
                    <img src={ArrowLeft} />
                </N.ArrowLeft>
                <N.LogoIcon>
                    <img src={LogoIcon} />
                </N.LogoIcon>
                <N.HeaderText>
                    <N.BackgroundImg src={RectangleHeader} />
                    <N.HeaderContent>알림을 확인해 보세요!</N.HeaderContent>
                </N.HeaderText>
            </N.Header>
            <N.Content>
                <N.NotificationOn>
                    <N.NotificationOnImg>
                        <img src={NotificationOn} />
                    </N.NotificationOnImg>
                    <N.NotificationTextBox>
                        <N.NotificationTitle>기본 소득 도입 정책에 대해서 어떻게 생각하세요?</N.NotificationTitle>
                        <N.NotificationDate>2025/04/08 10:00</N.NotificationDate>
                    </N.NotificationTextBox>
                </N.NotificationOn>
                <N.NotificationOff>
                    <N.NotificationOffImg>
                        <img src={NotificationOff} />
                    </N.NotificationOffImg>
                    <N.NotificationTextBox>
                        <N.NotificationTitle>딥시크 시대는 글로벌 AI 산업에 어떤 영향을 미쳤을까?</N.NotificationTitle>
                        <N.NotificationDate>2025/04/05 10:00</N.NotificationDate>
                    </N.NotificationTextBox>
                </N.NotificationOff>
            </N.Content>
        </N.Container>
    );
};
export default Notification;
