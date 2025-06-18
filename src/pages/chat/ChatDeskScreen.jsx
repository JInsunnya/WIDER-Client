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
    const chatEndRef = useRef(null);
    const [completionMessage, setCompletionMessage] = useState('');
    const sessionId = location.state?.sessionId || localStorage.getItem('latest_session_id');
    const textareaRef = useRef(null);

    const handleSendAnswer = async () => {
        if (!chatData || userAnswer.trim() === '') return;
        setIsSending(true);

        const payload = {
            session_id: chatData.session_id,
            topic: chatData.topic,
            topic_prompt: chatData.topic_prompt || '',
            current_level: chatData.current_level,
            user_answer: userAnswer,
        };

        console.log('respondChatApi로 보낼 payload:', payload);

        try {
            const userMsg = userAnswer;
            setUserAnswer('');
            if (textareaRef.current) textareaRef.current.style.height = '40px';

            setChatLog((prev) => [...prev, { sender: 'user', text: userMsg }]);

            const response = await respondChatApi(token, payload);

            setChatData(response);

            if (response.message?.trim()) {
                setChatLog((prev) => [...prev, { sender: 'bot', text: response.message }]);
            }

            if (response.question?.trim()) {
                setChatLog((prev) => [...prev, { sender: 'bot', text: response.question }]);
            }

            if (response.is_complete) {
                setIsComplete(true);
                const endPayload = {
                    session_id: response.session_id,
                    topic: response.topic,
                    current_level: response.current_level,
                    question: response.question,
                };
                const endResponse = await endChatApi(token, endPayload);
                setSummary(endResponse.summary);
                setCompletionMessage(endResponse.message);
                console.log('종료 응답:', endResponse);

                // 리포트 생성 API 호출
                try {
                    const reportPayload = {
                        report_id: crypto.randomUUID(), // UUID 자동 생성
                        session_id: chatData.session_id,
                        report: {
                            ...endResponse,
                            level: chatData.current_level,
                        },
                    };

                    console.log('리포트 생성 전 payload:', reportPayload);
                    console.log('endChat 응답 전체:', endResponse);

                    const generatedReport = await generateReportApi(chatData.session_id, token, reportPayload);
                    console.log('리포트 생성 완료:', generatedReport);
                } catch (err) {
                    console.error('리포트 생성 실패:', err);
                }
            }
        } catch (err) {
            console.error('답변 실패:', err);
            console.log('서버 응답 내용:', err.response?.data || '응답 없음');
        } finally {
            setIsSending(false);
        }
    };

    // useEffect(() => {
    //     const initChat = async () => {
    //         try {
    //             if (sessionId) {
    //                 console.log('기존 세션 불러오기:', sessionId);
    //                 const data = await getChatHistoryApi(sessionId, token);
    //                 console.log('getChatHistoryApi 응답:', data);

    //                 // 세션이 유효하지 않거나 기록이 없으면 새로운 채팅 시작
    //                 if (!data.messages || data.messages.length === 0) {
    //                     console.log('기록 없으므로 새로운 채팅 시작');
    //                     localStorage.removeItem('latest_session_id');
    //                     throw new Error('기록 없음'); // 아래 새 시작 로직으로 이동
    //                 }

    //                 if (!data.topic || !data.current_level) {
    //                     console.warn('topic이나 current_level 없으므로 새 startChat 호출');
    //                     localStorage.removeItem('latest_session_id');

    //                     const newData = await startChatApi(token);
    //                     setChatData(newData);
    //                     setChatLog([{ sender: 'bot', text: newData.question }]);
    //                     localStorage.setItem('latest_session_id', newData.session_id);
    //                     return;
    //                 }

    //                 const formattedChat = data.messages.map((msg) => ({
    //                     sender: msg.speaker === 'AI' ? 'bot' : 'user',
    //                     text: msg.content,
    //                 }));

    //                 setChatLog(formattedChat);
    //                 setChatData({
    //                     session_id: data.session_id,
    //                     topic: data.topic,
    //                     current_level: data.current_level,
    //                 });
    //                 setIsComplete(data.is_complete); // 서버에서 complete 알려준 경우
    //                 return;
    //             }

    //             throw new Error('sessionId 없음');
    //         } catch (err) {
    //             console.log('새 세션 시작');
    //             try {
    //                 const data = await startChatApi(token);
    //                 setChatData(data);
    //                 console.log('startChat 응답:', data);
    //                 setChatLog([{ sender: 'bot', text: data.question }]);
    //                 localStorage.setItem('latest_session_id', data.session_id);
    //             } catch (startErr) {
    //                 console.error('새로운 채팅 시작 실패:', startErr);
    //             }
    //         }
    //     };

    //     initChat();
    // }, [sessionId, token]);

    useEffect(() => {
        const initChat = async () => {
            const savedDate = localStorage.getItem('latest_session_date');
            const today = new Date().toISOString().split('T')[0];

            // 날짜가 다르면 새로운 세션 시작
            const shouldStartNewChat = savedDate !== today;

            try {
                if (!shouldStartNewChat && sessionId) {
                    const data = await getChatHistoryApi(sessionId, token);

                    if (!data.messages || data.messages.length === 0) {
                        localStorage.removeItem('latest_session_id');
                        localStorage.removeItem('latest_session_date');
                        throw new Error('기록 없음');
                    }

                    const formattedChat = data.messages.map((msg) => ({
                        sender: msg.speaker === 'AI' ? 'bot' : 'user',
                        text: msg.content,
                    }));

                    setChatLog(formattedChat);
                    setChatData({
                        session_id: data.session_id,
                        topic: data.topic,
                        current_level: data.current_level,
                    });
                    setIsComplete(data.is_complete);
                    return;
                }

                // 새로운 채팅 시작
                const newData = await startChatApi(token);
                setChatData(newData);
                setChatLog([{ sender: 'bot', text: newData.question }]);
                localStorage.setItem('latest_session_id', newData.session_id);
                localStorage.setItem('latest_session_date', today);
            } catch (err) {
                console.error('채팅 초기화 실패:', err);
            }
        };

        initChat();
    }, [sessionId, token]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatLog]);

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
                <div ref={chatEndRef} />
                {isComplete && (
                    <div style={{ marginTop: '-20px', textAlign: 'center', lineHeight: '1.2' }}>
                        <p>오늘의 대화가 종료되었습니다.</p>
                        <p>리포트에서 오늘의 사고 흐름을 확인해보세요!</p>
                    </div>
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
