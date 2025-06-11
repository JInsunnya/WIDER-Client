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

    const sessionId = location.state?.sessionId; // Chat에서 전달한 sessionId

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const res = await getReportBySessionIdApi(sessionId, token);
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
                    <R.Level>Level 2</R.Level>

                    <R.Feedback>
                        <R.FeedbackTitle>📝 요약</R.FeedbackTitle>
                        <R.FeedbackContent>{report.raw_data.summary}</R.FeedbackContent>
                    </R.Feedback>

                    <R.Line>
                        <img src={Line} />
                    </R.Line>

                    <R.Summary>
                        <R.SummaryTitle>이번 대화를 짧게 요약해드릴게요!</R.SummaryTitle>
                        <R.SummaryContent>{report.formatted_report}</R.SummaryContent>
                    </R.Summary>

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
