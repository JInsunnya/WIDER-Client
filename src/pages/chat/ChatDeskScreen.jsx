import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startChatApi, respondChatApi, endChatApi, getChatHistoryApi } from '../../api/chat/ChatApi';
import { generateReportApi } from '../../api/report/ReportApi';
import * as Cd from './ChatDeskScreenStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';
import Send from '../../assets/Send.png';

const ChatDesk = () => {
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const [chatData, setChatData] = useState(null);
    const [chatLog, setChatLog] = useState([]);
    const [userAnswer, setUserAnswer] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [summary, setSummary] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        const fetchChatStart = async () => {
            try {
                const data = await startChatApi(token);
                setChatData(data);
                setChatLog([{ sender: 'bot', text: data.question }]);
            } catch (error) {
                console.error('채팅 시작 실패:', error);
            }
        };

        fetchChatStart();
    }, [token]);

    const handleSendAnswer = async () => {
        if (!chatData || userAnswer.trim() === '') return;
        setIsSending(true);

        const payload = {
            session_id: chatData.session_id,
            topic: chatData.topic,
            current_level: chatData.current_level,
            user_answer: userAnswer,
        };

        try {
            // 사용자 답변 추가
            const userMsg = userAnswer;
            setUserAnswer('');
            if (textareaRef.current) textareaRef.current.style.height = 'auto';

            setChatLog((prev) => [...prev, { sender: 'user', text: userMsg }]);

            const response = await respondChatApi(token, payload);

            // 다음 질문 추가
            setChatData(response);
            setChatLog((prev) => [...prev, { sender: 'bot', text: response.question }]);

            if (response.is_complete) {
                setIsComplete(true);

                const endPayload = {
                    session_id: response.session_id,
                    topic: response.topic,
                    current_level: response.current_level,
                    question: response.question,
                };

                const endResponse = await endChatApi(token, endPayload);
                setSummary(endResponse);
                console.log('종료 응답:', endResponse);

                try {
                    const reportPayload = {
                        report_id: crypto.randomUUID(),
                        session_id: chatData.session_id,
                        report: endResponse,
                    };

                    const generatedReport = await generateReportApi(chatData.session_id, token, reportPayload);
                    console.log('리포트 생성 완료:', generatedReport);
                } catch (err) {
                    console.error('리포트 생성 실패:', err);
                }
            }
        } catch (err) {
            console.error('응답 처리 실패:', err);
        } finally {
            setIsSending(false);
        }
    };

    useEffect(() => {
        const sessionId = location?.state?.sessionId; // 이전 세션 ID 전달 여부 확인

        const fetchChat = async () => {
            try {
                if (sessionId) {
                    // 기록 불러오기
                    const data = await getChatHistoryApi(sessionId, token);
                    const formattedChat = data.messages.map((msg) => ({
                        sender: msg.speaker === 'AI' ? 'bot' : 'user',
                        text: msg.content,
                    }));
                    setChatLog(formattedChat);
                    setChatData({ session_id: data.session_id });
                    setIsComplete(true);
                } else {
                    // 새로 시작
                    const data = await startChatApi(token);
                    setChatData(data);
                    setChatLog([{ sender: 'bot', text: data.question }]);
                }
            } catch (error) {
                console.error('채팅 데이터 불러오기 실패:', error);
            }
        };

        fetchChat();
    }, [token]);

    return (
        <Cd.Container>
            <HomeDeskHeader sessionId={chatData?.session_id} />
            <Cd.Content>
                <Cd.Date>{new Date().toISOString().split('T')[0]}</Cd.Date>
                {chatLog.map((chat, index) =>
                    chat.sender === 'bot' ? (
                        <Cd.Chatbot key={index}>{chat.text}</Cd.Chatbot>
                    ) : (
                        <Cd.ChatUser key={index}>{chat.text}</Cd.ChatUser>
                    )
                )}
                {isComplete && summary && (
                    <Cd.SummaryBox>
                        <h4>대화 요약</h4>
                        <p>{summary.feedback}</p>
                    </Cd.SummaryBox>
                )}
            </Cd.Content>
            {!isComplete && (
                <>
                    <Cd.InputBackground />
                    <Cd.InputBox>
                        <Cd.InputWrapper>
                            <Cd.Input
                                ref={textareaRef}
                                value={userAnswer}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setUserAnswer(value);

                                    const el = textareaRef.current;
                                    el.style.height = '20px';
                                    if (value !== '') {
                                        el.style.height = el.scrollHeight + 'px';
                                    }
                                }}
                                placeholder="답변을 입력하세요..."
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey && !isSending) {
                                        e.preventDefault();
                                        handleSendAnswer();
                                    }
                                }}
                            />

                            <Cd.Send onClick={handleSendAnswer}>
                                <img src={Send} />
                            </Cd.Send>
                        </Cd.InputWrapper>
                    </Cd.InputBox>
                </>
            )}
            <Sidebar />
        </Cd.Container>
    );
};
export default ChatDesk;
