import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLevelProgressApi } from '../../api/insight/InsightApi';
import * as I from './InsightStyles.jsx';
import Header from '../../components/header/SettingsHeader.jsx';
import Footer from '../../components/footer/Footer.jsx';

const InsightChart = () => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.user.token);

    const [term, setTerm] = useState('상반기');
    const [showDropdown, setShowDropdown] = useState(false);
    const [chartData, setChartData] = useState([]);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const selectTerm = (t) => {
        setTerm(t);
        setShowDropdown(false);
    };

    const levelColors = ['#a6d5ff', '#8ec9ff', '#70baff', '#54aaff', '#3c9bff', '#248cff'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getLevelProgressApi(token);

                // 월별 L1~L6 빈도 계산
                const monthly = {};

                res.forEach(({ startedAt, maxBloomLevel }) => {
                    const date = new Date(startedAt);
                    const yyyy = date.getFullYear();
                    const mm = String(date.getMonth() + 1).padStart(2, '0');
                    const key = `${yyyy}/${mm}`;

                    if (!monthly[key]) monthly[key] = [0, 0, 0, 0, 0, 0]; // L1~L6

                    if (maxBloomLevel >= 1 && maxBloomLevel <= 6) {
                        monthly[key][maxBloomLevel - 1]++;
                    }
                });

                const filtered = Object.entries(monthly)
                    .filter(([month]) => {
                        const m = parseInt(month.split('/')[1]);
                        return term === '상반기' ? m <= 6 : m >= 7;
                    })
                    .map(([month, levels]) => ({ month, levels }));

                setChartData(filtered.sort((a, b) => a.month.localeCompare(b.month)));
            } catch (err) {
                console.error('레벨 진행 데이터 불러오기 실패:', err);
            }
        };

        fetchData();
    }, [term, token]);

    return (
        <I.Container>
            <Header />
            <I.Content>
                <I.TermSelector onClick={toggleDropdown}>
                    2025/{term} ▼
                    {showDropdown && (
                        <I.Dropdown>
                            <div onClick={() => selectTerm('상반기')}>2025 / 상반기</div>
                            <div onClick={() => selectTerm('하반기')}>2025 / 하반기</div>
                        </I.Dropdown>
                    )}
                </I.TermSelector>
                <I.ChartGrid>
                    {chartData.map((data, index) => (
                        <I.ChartBox
                            key={index}
                            onClick={() =>
                                navigate('/insightchart', {
                                    state: {
                                        chartData,
                                        selectedMonth: data.month,
                                    },
                                })
                            }
                        >
                            <I.MonthText>{data.month}</I.MonthText>
                            <I.ChartBarGroup>
                                {data.levels.map((value, i) => (
                                    <I.ChartBar key={i} height={`${value * 30}px`} color={levelColors[i]} />
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
