import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getReportBySessionIdApi } from '../../api/report/ReportApi';
import * as R from './ReportScreenStyles.jsx';
import ArrowLeft from '../../assets/ArrowLeft.png';
import Line from '../../assets/Line.png';

const Report = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = useSelector((state) => state.user.token);
    const [report, setReport] = useState(null);
    const bloomLevelDescriptions = {
        1: 'Remember: 사실을 기억하고 열거',
        2: 'Understand: 의미를 파악하고 해석',
        3: 'Apply: 개념을 적용하고 실행',
        4: 'Analyze: 구조를 분석하고 비교',
        5: 'Evaluate: 판단하고 비판적으로 평가',
        6: 'Create: 새로운 아이디어를 종합하고 창출',
    };

    const sessionId = location.state?.sessionId; // Chat에서 전달한 sessionId

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const res = await getReportBySessionIdApi(sessionId, token);
                console.log('리포트 전체 데이터:', res);
                setReport(res);
            } catch (err) {
                console.error('리포트 불러오기 실패:', err);
            }
        };

        if (sessionId) {
            fetchReport();
        }
    }, [sessionId, token]);

    return (
        <R.Container>
            <R.Header>
                <R.ArrowLeft onClick={() => navigate(-1)}>
                    <img src={ArrowLeft} />
                </R.ArrowLeft>
                <R.HeaderText>{new Date().toISOString().split('T')[0]} Report</R.HeaderText>
            </R.Header>
            {report ? (
                <R.Content>
                    <R.Level>Level {report.raw_data.bloom_level}</R.Level>
                    <R.LevelDescription>{bloomLevelDescriptions[report.raw_data.bloom_level]}</R.LevelDescription>

                    <R.Feedback>
                        <R.FeedbackTitle>이번 대화를 짧게 요약해드릴게요!</R.FeedbackTitle>
                        <R.FeedbackContent>{report.raw_data.summary}</R.FeedbackContent>
                    </R.Feedback>

                    <R.Line>
                        <img src={Line} />
                    </R.Line>

                    <R.Suggestion>
                        <R.SuggestionTitle>이런 점이 좋았어요!</R.SuggestionTitle>
                        {report.raw_data.strengths.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <R.SuggestionSubTitle>{item.title}</R.SuggestionSubTitle>
                                <R.SuggestionContent>{item.description}</R.SuggestionContent>
                                <R.SuggestionContent>{item.example}</R.SuggestionContent>
                            </React.Fragment>
                        ))}
                    </R.Suggestion>

                    <R.Line>
                        <img src={Line} />
                    </R.Line>

                    <R.Suggestion>
                        <R.SuggestionTitle>이렇게 해 보는 거 어때요?</R.SuggestionTitle>
                        {report.raw_data.weaknesses.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <R.SuggestionSubTitle>{item.title}</R.SuggestionSubTitle>
                                <R.SuggestionContent>{item.description}</R.SuggestionContent>
                                <R.SuggestionContent>{item.suggestion}</R.SuggestionContent>
                            </React.Fragment>
                        ))}
                        {report.raw_data.suggestions.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <R.SuggestionSubTitle>{item.title}</R.SuggestionSubTitle>
                                <R.SuggestionContent>{item.description}</R.SuggestionContent>
                                <R.SuggestionContent>{item.resources}</R.SuggestionContent>
                                {item.questions.map((q, i) => (
                                    <R.SuggestionContent key={i}>{q}</R.SuggestionContent>
                                ))}
                            </React.Fragment>
                        ))}
                    </R.Suggestion>

                    <R.Example>
                        <R.ExampleContent>{report.raw_data.revised_suggestion}</R.ExampleContent>
                    </R.Example>
                </R.Content>
            ) : (
                <p style={{ padding: '20px' }}>리포트를 불러오는 중입니다...</p>
            )}
        </R.Container>
    );
};

export default Report;
