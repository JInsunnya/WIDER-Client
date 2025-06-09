import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTodayTopicApi } from '../../api/home/getTopicApi';
import * as H from './HomeScreenStyles.jsx';
import LogoIcon from '../../assets/LogoIcon.png';
import BellOff from '../../assets/BellOff.png';
// import BellOn from '../../assets/BellOn.png';
import Footer from '../../components/footer/Footer.jsx';
import RectangleHeader from '../../assets/RectangleHeader.svg';

const Home = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const [todayTopic, setTodayTopic] = useState('');

    const goToChat = () => {
        navigate('/chat');
    };

    const goToReport = () => {
        navigate('/report');
    };

    const goToNotification = () => {
        navigate('/notification');
    };

    useEffect(() => {
        const fetchTopic = async () => {
            try {
                const res = await getTodayTopicApi(token);
                setTodayTopic(res || '오늘의 질문을 불러오지 못했습니다.');
            } catch (e) {
                setTodayTopic('질문을 불러오는 데 실패했습니다.');
                console.error(e);
            }
        };

        fetchTopic();
    }, [token]);

    return (
        <H.Container>
            <H.Header>
                <H.LogoIcon>
                    <img src={LogoIcon} />
                </H.LogoIcon>
                <H.HeaderText>
                    <H.BackgroundImg src={RectangleHeader} />
                    <div
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <H.ServiceName>나의 AI 파트너, WIDER와</H.ServiceName>
                        <H.ServiceTagline>오늘의 대화를 시작해 보세요!</H.ServiceTagline>
                    </div>
                </H.HeaderText>
                <H.BellOff onClick={goToNotification}>
                    <img src={BellOff} />
                </H.BellOff>
            </H.Header>
            <H.Content>
                <H.Title>오늘의 질문</H.Title>
                <H.Question onClick={goToChat}>{todayTopic}</H.Question>
                <H.StartConversation>
                    터치하여 대화를 <br />
                    시작하세요!
                </H.StartConversation>
                <H.ReportCreated>어제의 리포트가 생성되었습니다!</H.ReportCreated>
                <H.ButtonReport onClick={goToReport}>리포트 보러 가기</H.ButtonReport>
            </H.Content>
            <Footer />
        </H.Container>
    );
};
export default Home;
