import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Cs from './ChatScreenStyles.jsx';
import ArrowLeft from '../../assets/ArrowLeft.png';
import LogoIcon from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';
import Send from '../../assets/Send.png';

const Chat = () => {
    const navigate = useNavigate();

    const goToReport = () => {
        navigate('/report');
    };

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
                    <Cs.ServiceName>WIDER</Cs.ServiceName>
                    <Cs.ServiceTagline>내 생각을 키워주는 AI 파트너</Cs.ServiceTagline>
                </Cs.HeaderText>
                <Cs.Report onClick={goToReport}>
                    <img src={Report} />
                </Cs.Report>
            </Cs.Header>
            <Cs.Content>
                <Cs.Date>2025/03/25</Cs.Date>
                <Cs.Chat>
                    <Cs.Chatbot>기본 소득이란 무엇일까?</Cs.Chatbot>
                    <Cs.ChatUser>
                        음... 아무 일도 하지 않아도 모든 사람에게 일정한 돈을 주는 제도인 것 같아.
                    </Cs.ChatUser>
                </Cs.Chat>
            </Cs.Content>
            <Cs.InputBox>
                <Cs.InputWrapper>
                    <Cs.Input type="text" />
                    <Cs.Send>
                        <img src={Send} />
                    </Cs.Send>
                </Cs.InputWrapper>
            </Cs.InputBox>
        </Cs.Container>
    );
};
export default Chat;
