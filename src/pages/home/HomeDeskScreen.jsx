import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Hd from './HomeDeskScreenStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const HomeDesk = () => {
    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/chat');
    };

    const goToReport = () => {
        navigate('/report');
    };

    return (
        <Hd.Container>
            <HomeDeskHeader />
            <Hd.Content>
                <Hd.Title>오늘의 질문</Hd.Title>
                <Hd.Question onClick={goToChat}>대선 후보 단일화의 주요 후보는 누구인가요?</Hd.Question>
                <Hd.StartConversation>터치하여 대화를 시작하세요!</Hd.StartConversation>
                <Hd.ReportCreated>어제의 리포트가 생성되었습니다!</Hd.ReportCreated>
                <Hd.ButtonReport onClick={goToReport}>리포트 보러 가기</Hd.ButtonReport>
            </Hd.Content>
            <Sidebar />
        </Hd.Container>
    );
};
export default HomeDesk;
