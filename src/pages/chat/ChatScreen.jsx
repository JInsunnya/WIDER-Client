import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Cs from './ChatScreenStyles.jsx';
import { startChatApi, respondChatApi, endChatApi, getChatHistoryApi } from '../../api/chat/ChatApi';
import { generateReportApi } from '../../api/report/ReportApi';
import ArrowLeft from '../../assets/ArrowLeft.png';
import LogoIcon from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';
import Send from '../../assets/Send.png';
import RectangleHeader from '../../assets/RectangleHeader.svg';

const Chat = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);

    const [chatData, setChatData] = useState(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
    const [summary, setSummary] = useState(null);
    const textareaRef = useRef(null);
    const [completionMessage, setCompletionMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const goToReport = () => {
        navigate('/report', {
            state: {
                sessionId: chatData?.session_id,
            },
        });
    };

    useEffect(() => {
        const startChat = async () => {
            try {
                const data = await startChatApi(token);
                setChatData(data);
                setChatLog([{ sender: 'bot', text: data.question }]);
            } catch (error) {
                console.error('채팅 시작 실패:', error);
            }
        };

        startChat();
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

        console.log('respondChatApi로 보낼 payload:', payload);

        try {
            const userMsg = userAnswer;
            setUserAnswer('');
            if (textareaRef.current) textareaRef.current.style.height = '40px';

            setChatLog((prev) => [...prev, { sender: 'user', text: userMsg }]);

            const response = await respondChatApi(token, payload);

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
                // setSummary(endResponse);
                setSummary(endResponse.sumㅌmary);
                setCompletionMessage(endResponse.message);
                console.log('종료 응답:', endResponse);

                // 리포트 생성 API 호출
                try {
                    const reportPayload = {
                        report_id: crypto.randomUUID(), // UUID 자동 생성
                        session_id: chatData.session_id,
                        report: endResponse, // endChat 응답 전체 또는 필요한 필드만
                    };

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

    useEffect(() => {
        const fetchChatHistory = async () => {
            const sessionId = location.state?.sessionId; // report에서 온 경우
            if (!sessionId) return;

            try {
                const data = await getChatHistoryApi(sessionId, token);
                const formattedChat = data.messages.map((msg) => ({
                    sender: msg.speaker === 'AI' ? 'bot' : 'user',
                    text: msg.content,
                }));
                setChatLog(formattedChat);
                setChatData({ session_id: data.session_id }); // 최소한으로 필요한 필드
                setIsComplete(true); // 기록은 완료된 세션이므로 입력창 숨기기
            } catch (err) {
                console.error('채팅 기록 불러오기 실패:', err);
            }
        };

        fetchChatHistory();
    }, [token]);

    return (
        <Cs.Container>
            <Cs.Header>
                <Cs.ArrowLeft onClick={() => navigate(-1)}>
                    <img src={ArrowLeft} />
                </Cs.ArrowLeft>
                <Cs.LogoIcon>
                    <img src={LogoIcon} />
                </Cs.LogoIcon>
                <Cs.HeaderText>
                    <Cs.BackgroundImg src={RectangleHeader} />
                    <Cs.ServiceName>나의 AI 파트너, WIDER와</Cs.ServiceName>
                    <Cs.ServiceTagline>오늘의 대화를 시작 해 보세요!</Cs.ServiceTagline>
                </Cs.HeaderText>
                <Cs.Report onClick={goToReport}>
                    <img src={Report} />
                </Cs.Report>
            </Cs.Header>
            <Cs.Content>
                <Cs.Date>{new Date().toISOString().split('T')[0]}</Cs.Date>
                <Cs.Chat>
                    {chatLog.map((chat, index) =>
                        chat.sender === 'bot' ? (
                            <Cs.Chatbot key={index}>{chat.text}</Cs.Chatbot>
                        ) : (
                            <Cs.ChatUser key={index}>{chat.text}</Cs.ChatUser>
                        )
                    )}
                </Cs.Chat>

                {isComplete && (
                    <>
                        {completionMessage && <p style={{ marginTop: '20px' }}>{completionMessage}</p>}

                        {summary && (
                            <Cs.SummaryBox>
                                <h4>대화 요약</h4>
                                <p>{summary.feedback || '요약 정보가 없습니다.'}</p>
                            </Cs.SummaryBox>
                        )}
                    </>
                )}
            </Cs.Content>
            {!isComplete && (
                <Cs.InputBox>
                    <Cs.InputWrapper>
                        <Cs.Input
                            as="textarea"
                            ref={textareaRef}
                            value={userAnswer}
                            onChange={(e) => {
                                setUserAnswer(e.target.value);
                                const el = textareaRef.current;
                                el.style.height = 'auto';
                                el.style.height = `${el.scrollHeight}px`;
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey && !isSending) {
                                    e.preventDefault();
                                    handleSendAnswer();
                                }
                            }}
                            placeholder="답변을 입력하세요..."
                        />
                        <Cs.Send onClick={handleSendAnswer}>
                            <img src={Send} />
                        </Cs.Send>
                    </Cs.InputWrapper>
                </Cs.InputBox>
            )}
        </Cs.Container>
    );
};
export default Chat;
