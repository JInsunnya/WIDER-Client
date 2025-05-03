import React from 'react';
import * as Hd from './HomeDeskScreenStyles.jsx';
import LogoIcon from '../../assets/LogoIcon.png';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
    return (
        <Hd.Container>
            <HomeDeskHeader />
            <Hd.Content>
                <Hd.Title>오늘의 질문</Hd.Title>
                <Hd.Question>기본 소득 도입 정책에 대해서 어떻게 생각하세요?</Hd.Question>
                <Hd.StartConversation>터치하여 대화를 시작하세요!</Hd.StartConversation>
                <Hd.ReportCreated>어제의 리포트가 생성되었습니다!</Hd.ReportCreated>
                <Hd.ButtonReport>리포트 보러 가기</Hd.ButtonReport>
            </Hd.Content>
            <Sidebar />
        </Hd.Container>
    );
};
export default Home;
