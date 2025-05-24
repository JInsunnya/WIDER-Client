import React from 'react';
import * as Cd from './ChatDeskScreenStyles.jsx';
import HomeDeskHeader from '../../components/header/HomeDeskHeader';
import Sidebar from '../../components/sidebar/Sidebar';
import Send from '../../assets/Send.png';

const ChatDesk = () => {
    return (
        <Cd.Container>
            <HomeDeskHeader />
            <Cd.Content>
                <Cd.Date>2025/03/25</Cd.Date>
                <Cd.Chat>
                    <Cd.Chatbot>기본 소득이란 무엇일까?</Cd.Chatbot>
                    <Cd.ChatUser>
                        음... 아무 일도 하지 않아도 모든 사람에게 일정한 돈을 주는 제도인 것 같아.
                    </Cd.ChatUser>
                </Cd.Chat>
            </Cd.Content>
            <Cd.InputBox>
                <Cd.InputWrapper>
                    <Cd.Input type="text" />
                    <Cd.Send>
                        <img src={Send} />
                    </Cd.Send>
                </Cd.InputWrapper>
            </Cd.InputBox>
            <Sidebar />
        </Cd.Container>
    );
};
export default ChatDesk;
