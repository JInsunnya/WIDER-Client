import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTodayTopicApi } from '../../api/home/getTopicApi';
import * as Hd from './HomeDeskScreenStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';

const HomeDesk = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);
    const [todayTopic, setTodayTopic] = useState('');

    const goToChat = () => {
        const sessionId = localStorage.getItem('latest_session_id');
        if (sessionId) {
            navigate('/chat', { state: { sessionId } });
        } else {
            navigate('/chat');
        }
    };

    const goToReport = () => {
        const sessionId = localStorage.getItem('latest_session_id');
        navigate('/report', {
            state: {
                sessionId,
            },
        });
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
        <Hd.Container>
            <HomeDeskHeader />
            <Hd.Content>
                <Hd.Title>오늘의 질문</Hd.Title>
                <Hd.Question onClick={goToChat}>{todayTopic}</Hd.Question>
                <Hd.StartConversation>터치하여 대화를 시작하세요!</Hd.StartConversation>
                <Hd.ReportCreated>오늘의 리포트가 생성되었습니다!</Hd.ReportCreated>
                <Hd.ButtonReport onClick={goToReport}>리포트 보러 가기</Hd.ButtonReport>
            </Hd.Content>
            <Sidebar />
        </Hd.Container>
    );
};
export default HomeDesk;
