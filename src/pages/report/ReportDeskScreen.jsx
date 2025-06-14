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
    const bloomLevelDescriptions = {
        1: 'Remember: 사실을 기억하고 열거',
        2: 'Understand: 의미를 파악하고 해석',
        3: 'Apply: 개념을 적용하고 실행',
        4: 'Analyze: 구조를 분석하고 비교',
        5: 'Evaluate: 판단하고 비판적으로 평가',
        6: 'Create: 새로운 아이디어를 종합하고 창출',
    };

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
                <Rd.HeaderText>{new Date().toISOString().split('T')[0]} Report</Rd.HeaderText>
            </Rd.Header>
            {report ? (
                <Rd.Content>
                    <Rd.Level> Level {report.raw_data.bloom_level}</Rd.Level>
                    <Rd.LevelDescription>{bloomLevelDescriptions[report.raw_data.bloom_level]}</Rd.LevelDescription>

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
