import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as R from './ReportScreenStyles.jsx';
import ArrowLeft from '../../assets/ArrowLeft.png';
import Line from '../../assets/Line.png';

const Report = () => {
    const navigate = useNavigate();

    return (
        <R.Container>
            <R.Header>
                <R.ArrowLeft onClick={() => navigate(-1)}>
                    <img src={ArrowLeft} />
                </R.ArrowLeft>
                <R.HeaderText>2025 / 03 / 25 Report</R.HeaderText>
            </R.Header>
            <R.Content>
                <R.Level>Level 2</R.Level>
                <R.Feedback>
                    <R.FeedbackTitle>Understand: 의미를 파악하고 해석</R.FeedbackTitle>
                    <R.FeedbackContent>
                        핵심 개념을 정확히 파악하고 있어요. 표현을 통해서 기본 소득의 핵심인 무조건성, 보편성, 정기성을
                        잘 담았습니다. 사전적인 정의를 외운 게 아니라 자신만의 언어로 재구성했다는 점에서 이해 기반의
                        표현으로 보이네요. 구체적이고 타당한 사회적 맥락을 제시했어요. 일자리 부족과 빈부격차는 실제로
                        기본 소득이 등장하게 된 중요한 이유입니다. 맥락 연결이 자연스럽네요!
                    </R.FeedbackContent>
                </R.Feedback>
                <R.Line>
                    <img src={Line} />
                </R.Line>
                <R.Summary>
                    <R.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</R.SummaryTitle>
                    <R.SummaryContent>
                        기본 소득에 대해 의견을 나눴고, 이를 모든 사람에게 조건 없이 지급되는 제도로 이해했어요. 기본
                        소득이 등장한 배경으로는 일자리 부족과 빈부격차 해소를 들었고, WIDER는 이에 대해 지역 사회에
                        도입된다면 어떤 변화가 생길지를 질문하며 사고를 확장시켰어요.
                    </R.SummaryContent>
                </R.Summary>
                <R.Line>
                    <img src={Line} />
                </R.Line>
                <R.Suggestion>
                    <R.SuggestionTitle>이렇게 해 보는 거 어때요?</R.SuggestionTitle>
                    <R.SuggestionSubTitle>정기성 금액 수준에 대해 언급해 보세요!</R.SuggestionSubTitle>
                    <R.SuggestionContent>
                        일정한 돈이라는 표현을 조금만 더 구체화해도 좋을 것 같아요.
                    </R.SuggestionContent>
                    <R.SuggestionSubTitle>사회 변화 흐름과 연결해 보세요!</R.SuggestionSubTitle>
                    <R.SuggestionContent>사회 변화 흐름과 연결하면 더 설득력 있습니다.</R.SuggestionContent>
                </R.Suggestion>
                <R.Example>
                    <R.ExampleContent>"생활을 유지할 수 있을 정도의 금액을..."</R.ExampleContent>
                    <R.ExampleContent>"자동화로 일자리가 줄어드는 상황에서..."</R.ExampleContent>
                </R.Example>
            </R.Content>
        </R.Container>
    );
};

export default Report;
