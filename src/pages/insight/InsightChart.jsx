import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Ic from './InsightChartStyles.jsx';
import Header from '../../components/header/SettingsHeader.jsx';
import Footer from '../../components/footer/Footer.jsx';

const InsightChart = () => {
    const navigate = useNavigate();

    const levelColors = ['#a6d5ff', '#8ec9ff', '#70baff', '#54aaff', '#3c9bff', '#248cff'];
    const dummyData = {
        month: '2025/01',
        levels: [120, 180, 100, 80, 60, 40],
        comment:
            'B6님은 1월에 다양한 개념을 잘 이해하고 의미를 정확히 짚어냈어요.\n사고의 깊이가 점점 더해지고 있어요!',
    };

    const [selectedMonth, setSelectedMonth] = useState('2025/01');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const months = ['2025/01', '2025/02', '2025/03', '2025/04', '2025/05', '2025/06'];

    return (
        <Ic.Container>
            <Header />
            <Ic.Content>
                <Ic.MonthTitle onClick={() => setIsDropdownOpen(!isDropdownOpen)}>{selectedMonth} ▼</Ic.MonthTitle>
                {isDropdownOpen && (
                    <Ic.Dropdown>
                        {months.map((month) => (
                            <Ic.DropdownItem
                                key={month}
                                onClick={() => {
                                    setSelectedMonth(month);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {month}
                            </Ic.DropdownItem>
                        ))}
                    </Ic.Dropdown>
                )}
                <Ic.ChartBox>
                    <Ic.ChartBarGroup>
                        {dummyData.levels.map((value, i) => (
                            <Ic.ChartBar key={i} height={`${value}px`} color={levelColors[i]} />
                        ))}
                    </Ic.ChartBarGroup>
                    <Ic.ChartLabelGroup>
                        {['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'].map((label, i) => (
                            <div key={i}>{label}</div>
                        ))}
                    </Ic.ChartLabelGroup>
                </Ic.ChartBox>

                <Ic.FeedbackBox>
                    {dummyData.comment.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </Ic.FeedbackBox>
            </Ic.Content>
            <Footer />
        </Ic.Container>
    );
};
export default InsightChart;
