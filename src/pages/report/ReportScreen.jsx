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
                    {/* <R.FeedbackContent>
                    대선 후보 단일화에 대한 여러 측면을 탐구하며, 주요 후보와 장단점, 교훈을 바탕으로 적용 방안, 정책 상호작용 분석, 정치적 영향 평가, 그리고 새로운 전략 설계 요소를 제시했습니다.
                    </R.FeedbackContent> */}
                </R.Feedback>
                <R.Line>
                    <img src={Line} />
                </R.Line>
                <R.Summary>
                    <R.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</R.SummaryTitle>
                    <R.SummaryContent>
                        나는 대선 후보 단일화에 대해 정책 상호작용, 정치적 영향 등을 분석하며 다양한 전략을 고민했어요.
                        유권자의 인식 변화와 정책 조율 문제를 함께 다뤘고, 이론적인 통찰을 바탕으로 실천 방안도
                        제안했어요.
                    </R.SummaryContent>
                </R.Summary>
                <R.Line>
                    <img src={Line} />
                </R.Line>
                <R.Suggestion>
                    <R.SuggestionTitle>이런 점이 좋았어요!</R.SuggestionTitle>
                    <R.SuggestionSubTitle>정교한 분석 능력</R.SuggestionSubTitle>
                    <R.SuggestionContent>
                        정책의 상호작용과 유권자에게 미치는 영향을 잘 분석했습니다. 특히, 정책의 보완성 또는 충돌
                        가능성을 언급하며 유권자 인식에 대한 통찰을 보여주었습니다.
                    </R.SuggestionContent>
                    <R.SuggestionContent>
                        대선 후보 단일화 과정에서는 각 후보의 정책이 상호 보완적이거나 충돌할 수 있습니다.
                    </R.SuggestionContent>
                </R.Suggestion>
                <R.Line>
                    <img src={Line} />
                </R.Line>
                <R.Suggestion>
                    <R.SuggestionTitle>이렇게 해 보는 거 어때요?</R.SuggestionTitle>
                    <R.SuggestionSubTitle>실제 사례의 부족</R.SuggestionSubTitle>
                    <R.SuggestionContent>
                        이론적인 분석은 뛰어나지만, 구체적인 사례나 데이터를 통한 실질적인 뒷받침이 부족합니다. 이를
                        통해 주장의 신뢰성을 높일 수 있습니다.
                    </R.SuggestionContent>
                    <R.SuggestionContent>
                        대선 후보 단일화의 실제 사례를 조사하고, 관련 데이터를 수집하여 분석에 포함시켜 보세요.
                    </R.SuggestionContent>
                    <R.SuggestionSubTitle>사례 연구</R.SuggestionSubTitle>
                    <R.SuggestionContent>
                        실제 대선 후보 단일화 사례를 분석하여 그 결과를 비교 분석하는 연습을 해보세요. 이를 통해 이론을
                        실제에 적용하는 능력을 키울 수 있습니다.
                    </R.SuggestionContent>
                    <R.SuggestionContent>
                        과거의 대선 후보 단일화 사례에서 어떤 성공과 실패가 있었나요?
                    </R.SuggestionContent>
                    <R.SuggestionContent>
                        이러한 사례들이 현재의 분석에 어떤 영향을 미칠 수 있을까요?
                    </R.SuggestionContent>
                    <R.SuggestionContent>실제 데이터를 통해 내 주장을 어떻게 강화할 수 있을까요?</R.SuggestionContent>
                </R.Suggestion>
                <R.Example>
                    <R.ExampleContent>
                        "대선 후보 단일화 과정에서 협상과 합의의 중요성을 배웠습니다. 향후 선거에서는 후보 간 정책 조율
                        메커니즘을 통해 단일화 이후의 정책 일관성을 확보하며, 유권자 지지 기반 분석을 통해 표 이동을
                        최소화하는 전략이 필요합니다. 또한, 과거 사례를 분석하여 민주적 다양성을 유지하는 방안을
                        모색하겠습니다."
                    </R.ExampleContent>
                    {/* <R.ExampleContent>"자동화로 일자리가 줄어드는 상황에서..."</R.ExampleContent> */}
                </R.Example>
            </R.Content>
        </R.Container>
    );
};

export default Report;
