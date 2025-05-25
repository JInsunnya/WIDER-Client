import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as I from './InsightStyles.jsx';
import Header from '../../components/header/SettingsHeader.jsx';
import Footer from '../../components/footer/Footer.jsx';

const dummyData = [
    { month: '2025/01', levels: [50, 80, 60, 40, 30, 20] },
    { month: '2025/02', levels: [50, 80, 60, 40, 30, 20] },
    { month: '2025/03', levels: [50, 80, 60, 40, 30, 20] },
    { month: '2025/04', levels: [50, 80, 60, 40, 30, 20] },
    { month: '2025/05', levels: [50, 80, 60, 40, 30, 20] },
    { month: '2025/06', levels: [50, 80, 60, 40, 30, 20] },
];

const InsightChart = () => {
    const navigate = useNavigate();

    const goToInsightChart = () => {
        navigate('/insightchart');
    };

    const [term, setTerm] = useState('상반기');
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const selectTerm = (t) => {
        setTerm(t);
        setShowDropdown(false);
        // 이후 서버에서 데이터 가져와야 함
    };

    const levelColors = ['#a6d5ff', '#8ec9ff', '#70baff', '#54aaff', '#3c9bff', '#248cff'];

    return (
        <I.Container>
            <Header />
            <I.Content>
                {/* <I.Title>2025/상반기 ▼</I.Title> */}
                <I.TermSelector onClick={toggleDropdown}>
                    2025/{term} ▼
                    {showDropdown && (
                        <I.Dropdown>
                            <div onClick={() => selectTerm('상반기')}>2025 / 상반기</div>
                            <div onClick={() => selectTerm('하반기')}>2025 / 하반기</div>
                        </I.Dropdown>
                    )}
                </I.TermSelector>
                <I.ChartGrid onClick={goToInsightChart}>
                    {dummyData.map((data, index) => (
                        <I.ChartBox key={index}>
                            <I.MonthText>{data.month}</I.MonthText>
                            <I.ChartBarGroup>
                                {data.levels.map((value, i) => (
                                    <I.ChartBar key={i} height={`${value}px`} color={levelColors[i]} />
                                ))}
                            </I.ChartBarGroup>
                            <I.ChartLabelGroup>
                                {['1', '2', '3', '4', '5', '6'].map((level) => (
                                    <div key={level}>L{level}</div>
                                ))}
                            </I.ChartLabelGroup>
                        </I.ChartBox>
                    ))}
                </I.ChartGrid>
            </I.Content>
            <Footer />
        </I.Container>
    );
};
export default InsightChart;
