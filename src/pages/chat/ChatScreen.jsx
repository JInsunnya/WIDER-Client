import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Cs from './ChatScreenStyles.jsx';
import ArrowLeft from '../../assets/ArrowLeft.png';
import LogoIcon from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';
import Send from '../../assets/Send.png';
import RectangleHeader from '../../assets/RectangleHeader.svg';

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
                    <Cs.BackgroundImg src={RectangleHeader} />
                    <Cs.ServiceName>나의 AI 파트너, WIDER와</Cs.ServiceName>
                    <Cs.ServiceTagline>오늘의 대화를 시작 해 보세요!</Cs.ServiceTagline>
                </Cs.HeaderText>
                <Cs.Report onClick={goToReport}>
                    <img src={Report} />
                </Cs.Report>
            </Cs.Header>
            <Cs.Content>
                <Cs.Date>2025/03/25</Cs.Date>
                <Cs.Chat>
                    <Cs.Chatbot>대선 후보 단일화의 주요 후보는 누구인가요?</Cs.Chatbot>
                    <Cs.ChatUser>김문수, 한덕수</Cs.ChatUser>
                    <Cs.Chatbot>대선 후보 단일화의 장점과 단점을 설명해보세요.</Cs.Chatbot>
                    <Cs.ChatUser>
                        상대 당의 대선 후보가 당선 유력할 경우, 대선 후보를 단일화하는 것이 지지 세력 결집이라는
                        측면에서 도움이 될 것임. 하지만, 단일화를 한다고 모든 지지 세력이 흡수된다는 보장이 없다는
                        단점도 있음.
                    </Cs.ChatUser>
                    <Cs.Chatbot>
                        대선 후보 단일화 과정을 통해 얻은 교훈을 바탕으로, 향후 선거에서 후보 단일화를 어떻게 적용할 수
                        있을까요?
                    </Cs.Chatbot>
                    <Cs.ChatUser>
                        이번에 대선 후보 단일화 과정을 지켜보니깐, 협상과 합의가 매우 중요함을 느꼈음. 향후 선거에서는
                        후보 간 명확한 합의와 지지층 통합 전략이 필요할 듯.
                    </Cs.ChatUser>
                    <Cs.Chatbot>
                        대선 후보 단일화 과정에서 각 후보의 정책이 어떻게 상호작용하며 유권자에게 어떤 영향을 미칠 수
                        있는지 분석해 보세요.
                    </Cs.Chatbot>
                    <Cs.ChatUser>
                        대선 후보 단일화 과정에서는 각 후보의 정책이 상호 보완적이거나 충돌할 수 있음. 정책이 보완적일
                        경우 유권자에게 통합된 비전으로 긍정적 인식을 줄 수 있지만, 충돌할 경우 지지층 이탈이나 혼란을
                        초래할 위험이 있을 듯.
                    </Cs.ChatUser>
                    <Cs.Chatbot>대선 후보 단일화가 정치적 환경에 미치는 잠재적 영향을 어떻게 평가하시나요?</Cs.Chatbot>
                    <Cs.ChatUser>
                        대선 후보 단일화는 정치적 환경에 긍정적, 부정적 영향을 모두 미칠 수 있음. 긍정적으로는 진영 결집
                        효과를 통해 표의 분산을 막고 선거 전략의 효율성을 높일 수 있지만, 부정적으로는 일부 유권자에게
                        소외감을 줄 수 있음. 또한, 이번 국민의힘 단일화 과정에서 확인했듯이, 장기적 갈등이 정치 불신을
                        초래할 가능성도 있음.
                    </Cs.ChatUser>
                    <Cs.Chatbot>
                        대선 후보 단일화를 위해 새로운 전략을 제안한다면, 어떤 요소를 고려하여 그 전략을 설계하시겠어요?
                    </Cs.Chatbot>
                    <Cs.ChatUser>
                        대선 후보 단일화를 위한 새로운 전략을 설계할 때는 다음 요소를 고려해야 함. 첫째, 후보 간 정책
                        조율 메커니즘을 통해 단일화 이후 정책 일관성을 확보해야 함. 둘째, 유권자 지지 기반 분석을 통해
                        단일화로 인한 표 이동을 최소화하는 전략이 필요함. 셋째, 단일화 절차의 투명성을 강조하여 정치적
                        신뢰를 유지해야 함.
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
