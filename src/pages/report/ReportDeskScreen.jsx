import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Rd from './ReportDeskScreenStyles.jsx';
import Sidebar from '../../components/sidebar/Sidebar';
import ArrowLeft from '../../assets/ArrowLeft.png';
import LineVertical from '../../assets/LineVertical.png';

const ReportDesk = () => {
    const navigate = useNavigate();

    return (
        <Rd.Container>
            <Rd.Header>
                <Rd.ArrowLeft onClick={() => navigate(-1)}>
                    <img src={ArrowLeft} />
                </Rd.ArrowLeft>
                <Rd.HeaderText>2025 / 03 / 25 Report</Rd.HeaderText>
            </Rd.Header>
            <Rd.Content>
                <Rd.Level>Level 2</Rd.Level>
                <Rd.Feedback>
                    <Rd.FeedbackTitle>Understand: 의미를 파악하고 해석</Rd.FeedbackTitle>
                </Rd.Feedback>
                <Rd.Grid>
                    <Rd.LeftColumn>
                        <Rd.Summary>
                            <Rd.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</Rd.SummaryTitle>
                            <Rd.SummaryContent>
                                기본 소득에 대해 의견을 나눴고, 이를 모든 사람에게 조건 없이 지급되는 제도로 이해했어요.
                                기본 소득이 등장한 배경으로는 일자리 부족과 빈부격차 해소를 들었고, WIDER는 이에 대해
                                지역 사회에 도입된다면 어떤 변화가 생길지를 질문하며 사고를 확장시켰어요.
                            </Rd.SummaryContent>
                        </Rd.Summary>
                        <Rd.FeedbackContent>
                            <Rd.FeedbackContentTitle>이런 점이 좋았어요!</Rd.FeedbackContentTitle>
                            <Rd.FeedbackContentText>
                                핵심 개념을 정확히 파악하고 있어요. 표현을 통해서 기본 소득의 핵심인 무조건성, 보편성,
                                정기성을 잘 담았습니다. 사전적인 정의를 외운 게 아니라 자신만의 언어로 재구성했다는
                                점에서 이해 기반의 표현으로 보이네요. 구체적이고 타당한 사회적 맥락을 제시했어요. 일자리
                                부족과 빈부격차는 실제로 기본 소득이 등장하게 된 중요한 이유입니다. 맥락 연결이
                                자연스럽네요!
                            </Rd.FeedbackContentText>
                        </Rd.FeedbackContent>
                    </Rd.LeftColumn>
                    <Rd.LineVertical>
                        <img src={LineVertical} />
                    </Rd.LineVertical>
                    <Rd.RightColumn>
                        <Rd.Suggestion>
                            <Rd.SuggestionTitle>이렇게 해 보는 거 어때요?</Rd.SuggestionTitle>
                            <Rd.SuggestionSubTitle>정기성 금액 수준에 대해 언급해 보세요!</Rd.SuggestionSubTitle>
                            <Rd.SuggestionContent>
                                일정한 돈이라는 표현을 조금만 더 구체화해도 좋을 것 같아요.
                            </Rd.SuggestionContent>
                            <Rd.SuggestionSubTitle>사회 변화 흐름과 연결해 보세요!</Rd.SuggestionSubTitle>
                            <Rd.SuggestionContent>사회 변화 흐름과 연결하면 더 설득력 있습니다.</Rd.SuggestionContent>
                        </Rd.Suggestion>
                        <Rd.Example>
                            <Rd.ExampleContent>"생활을 유지할 수 있을 정도의 금액을..."</Rd.ExampleContent>
                            <Rd.ExampleContent>"자동화로 일자리가 줄어드는 상황에서..."</Rd.ExampleContent>
                        </Rd.Example>
                    </Rd.RightColumn>
                </Rd.Grid>
            </Rd.Content>
            <Sidebar />
        </Rd.Container>
    );
};

export default ReportDesk;
