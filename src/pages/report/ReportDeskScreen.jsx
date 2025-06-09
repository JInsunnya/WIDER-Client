import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReportBySessionIdApi } from '../../api/report/ReportApi';
import * as Rd from './ReportDeskScreenStyles.jsx';
import Sidebar from '../../components/sidebar/Sidebar';
import ArrowLeft from '../../assets/ArrowLeft.png';
import LineVertical from '../../assets/LineVertical.png';

const ReportDesk = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const sessionId = location.state?.sessionId;
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            if (!sessionId) {
                console.warn('sessionId 없음');
                return;
            }

            try {
                const res = await getReportBySessionIdApi(sessionId, token);
                setReport(res);
            } catch (err) {
                console.error('리포트 조회 실패:', err);
            }
        };

        fetchReport();
    }, [sessionId, token]);

    return (
        <Rd.Container>
            <Rd.Header>
                <Rd.ArrowLeft onClick={() => navigate(-1)}>
                    <img src={ArrowLeft} />
                </Rd.ArrowLeft>
                {/* <Rd.HeaderText>2025 / 03 / 25 Report</Rd.HeaderText> */}
                <Rd.HeaderText>{new Date().toISOString().split('T')[0]} Report</Rd.HeaderText>
            </Rd.Header>
            {/* <Rd.Content>
                <Rd.Level>Level 2</Rd.Level>
                <Rd.Feedback>
                    <Rd.FeedbackTitle>Understand: 의미를 파악하고 해석</Rd.FeedbackTitle>
                </Rd.Feedback>
                <Rd.Grid>
                    <Rd.LeftColumn>
                        <Rd.Summary>
                            <Rd.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</Rd.SummaryTitle>
                            <Rd.SummaryContent>
                                나는 대선 후보 단일화에 대해 정책 상호작용, 정치적 영향 등을 분석하며 다양한 전략을
                                고민했어요. 유권자의 인식 변화와 정책 조율 문제를 함께 다뤘고, 이론적인 통찰을 바탕으로
                                실천 방안도 제안했어요.
                            </Rd.SummaryContent>
                        </Rd.Summary>
                        <Rd.Suggestion>
                            <Rd.SuggestionTitle>이런 점이 좋았어요!</Rd.SuggestionTitle>
                            <Rd.SuggestionSubTitle>정교한 분석 능력</Rd.SuggestionSubTitle>
                            <Rd.SuggestionContent>
                                정책의 상호작용과 유권자에게 미치는 영향을 잘 분석했습니다. 특히, 정책의 보완성 또는
                                충돌 가능성을 언급하며 유권자 인식에 대한 통찰을 보여주었습니다.
                            </Rd.SuggestionContent>
                            <Rd.SuggestionContent>
                                대선 후보 단일화 과정에서는 각 후보의 정책이 상호 보완적이거나 충돌할 수 있습니다.
                            </Rd.SuggestionContent>
                        </Rd.Suggestion>
                    </Rd.LeftColumn>
                    <Rd.LineVertical>
                        <img src={LineVertical} />
                    </Rd.LineVertical>
                    <Rd.RightColumn>
                        <Rd.Suggestion>
                            <Rd.SuggestionTitle>이렇게 해 보는 거 어때요?</Rd.SuggestionTitle>
                            <Rd.SuggestionSubTitle>실제 사례의 부족</Rd.SuggestionSubTitle>
                            <Rd.SuggestionContent>
                                이론적인 분석은 뛰어나지만, 구체적인 사례나 데이터를 통한 실질적인 뒷받침이 부족합니다.
                                이를 통해 주장의 신뢰성을 높일 수 있습니다.
                            </Rd.SuggestionContent>
                            <Rd.SuggestionContent>
                                대선 후보 단일화의 실제 사례를 조사하고, 관련 데이터를 수집하여 분석에 포함시켜 보세요.
                            </Rd.SuggestionContent>
                            <Rd.SuggestionSubTitle>사례 연구</Rd.SuggestionSubTitle>
                            <Rd.SuggestionContent>
                                실제 대선 후보 단일화 사례를 분석하여 그 결과를 비교 분석하는 연습을 해보세요. 이를 통해
                                이론을 실제에 적용하는 능력을 키울 수 있습니다.
                            </Rd.SuggestionContent>
                            <Rd.SuggestionContent>
                                과거의 대선 후보 단일화 사례에서 어떤 성공과 실패가 있었나요?
                            </Rd.SuggestionContent>
                            <Rd.SuggestionContent>
                                이러한 사례들이 현재의 분석에 어떤 영향을 미칠 수 있을까요?
                            </Rd.SuggestionContent>
                            <Rd.SuggestionContent>
                                실제 데이터를 통해 내 주장을 어떻게 강화할 수 있을까요?
                            </Rd.SuggestionContent>
                        </Rd.Suggestion>
                        <Rd.Example>
                            <Rd.ExampleContent>
                                "대선 후보 단일화 과정에서 협상과 합의의 중요성을 배웠습니다. 향후 선거에서는 후보 간
                                정책 조율 메커니즘을 통해 단일화 이후의 정책 일관성을 확보하며, 유권자 지지 기반 분석을
                                통해 표 이동을 최소화하는 전략이 필요합니다. 또한, 과거 사례를 분석하여 민주적 다양성을
                                유지하는 방안을 모색하겠습니다."
                            </Rd.ExampleContent>
                        </Rd.Example>
                    </Rd.RightColumn>
                </Rd.Grid>
            </Rd.Content> */}
            {report ? (
                <Rd.Content>
                    <Rd.Level>{report.level || 'Level ?'}</Rd.Level>
                    <Rd.Feedback>
                        <Rd.FeedbackTitle>{report.feedback_type || '피드백 유형 없음'}</Rd.FeedbackTitle>
                    </Rd.Feedback>

                    <Rd.Grid>
                        <Rd.LeftColumn>
                            <Rd.Summary>
                                <Rd.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</Rd.SummaryTitle>
                                <Rd.SummaryContent>{report.raw_data.summary}</Rd.SummaryContent>
                            </Rd.Summary>

                            <Rd.Suggestion>
                                <Rd.SuggestionTitle>이런 점이 좋았어요!</Rd.SuggestionTitle>
                                {report.raw_data.strengths.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <Rd.SuggestionSubTitle>{item.title}</Rd.SuggestionSubTitle>
                                        <Rd.SuggestionContent>{item.description}</Rd.SuggestionContent>
                                        <Rd.SuggestionContent>{item.example}</Rd.SuggestionContent>
                                    </React.Fragment>
                                ))}
                            </Rd.Suggestion>
                        </Rd.LeftColumn>

                        <Rd.LineVertical>
                            <img src={LineVertical} />
                        </Rd.LineVertical>

                        <Rd.RightColumn>
                            <Rd.Suggestion>
                                <Rd.SuggestionTitle>이렇게 해 보는 거 어때요?</Rd.SuggestionTitle>
                                {report.raw_data.weaknesses.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <Rd.SuggestionSubTitle>{item.title}</Rd.SuggestionSubTitle>
                                        <Rd.SuggestionContent>{item.description}</Rd.SuggestionContent>
                                        <Rd.SuggestionContent>{item.suggestion}</Rd.SuggestionContent>
                                    </React.Fragment>
                                ))}
                                {report.raw_data.suggestions.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <Rd.SuggestionSubTitle>{item.title}</Rd.SuggestionSubTitle>
                                        <Rd.SuggestionContent>{item.description}</Rd.SuggestionContent>
                                        <Rd.SuggestionContent>{item.resources}</Rd.SuggestionContent>
                                        {item.questions.map((q, i) => (
                                            <Rd.SuggestionContent key={i}>{q}</Rd.SuggestionContent>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </Rd.Suggestion>

                            <Rd.Example>
                                <Rd.ExampleContent>{report.raw_data.revised_suggestion}</Rd.ExampleContent>
                            </Rd.Example>
                        </Rd.RightColumn>
                    </Rd.Grid>
                </Rd.Content>
            ) : (
                <p style={{ padding: '20px' }}>리포트를 불러오는 중입니다...</p>
            )}
            <Sidebar />
        </Rd.Container>
    );
};

export default ReportDesk;
