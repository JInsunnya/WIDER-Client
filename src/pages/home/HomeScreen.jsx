import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as H from './HomeScreenStyles.jsx';
import LogoIcon from '../../assets/LogoIcon.png';
import BellOff from '../../assets/BellOff.png';
// import BellOn from '../../assets/BellOn.png';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/chat');
    };

    return (
        <H.Container>
            <H.Header>
                <H.LogoIcon>
                    <img src={LogoIcon} />
                </H.LogoIcon>
                <H.HeaderText>
                    <H.ServiceName>WIDER</H.ServiceName>
                    <H.ServiceTagline>내 생각을 키워주는 AI 파트너</H.ServiceTagline>
                </H.HeaderText>
                <H.BellOff>
                    <img src={BellOff} />
                </H.BellOff>
            </H.Header>
            <H.Content>
                <H.Title>오늘의 질문</H.Title>
                <H.Question onClick={goToChat}>기본 소득 도입 정책에 대해서 어떻게 생각하세요?</H.Question>
                <H.StartConversation>
                    터치하여 대화를 <br />
                    시작하세요!
                </H.StartConversation>
                <H.ReportCreated>어제의 리포트가 생성되었습니다!</H.ReportCreated>
                <H.ButtonReport>리포트 보러 가기</H.ButtonReport>
            </H.Content>
            <Footer />
        </H.Container>
    );
};
export default Home;
