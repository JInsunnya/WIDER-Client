import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Ic from './InsightChartStyles.jsx';
import Header from '../../components/header/SettingsHeader.jsx';
import Footer from '../../components/footer/Footer.jsx';

const InsightChart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const chartData = location.state?.chartData || [];
    const selectedMonthFromNav = location.state?.selectedMonth;

    const levelColors = ['#a6d5ff', '#8ec9ff', '#70baff', '#54aaff', '#3c9bff', '#248cff'];

    const availableMonths = chartData.map((d) => d.month);
    const [selectedMonth, setSelectedMonth] = useState(selectedMonthFromNav || availableMonths[0] || '');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectedData = chartData.find((d) => d.month === selectedMonth);

    const getMostFrequentLevel = (levels) => {
        let maxCount = Math.max(...levels);
        return levels.findIndex((v) => v === maxCount) + 1;
    };

    const levelComments = {
        1: `이 달에는 학습한 개념들을 잘 기억하고, 주요 용어나 정의를 빠짐없이 떠올릴 수 있었습니다. 
      이는 탄탄한 기초 이해를 위한 중요한 첫걸음이며, 꾸준한 복습과 반복 학습을 통해 더 깊은 사고로 확장될 수 있는 기반이 마련되었습니다.`,

        2: `단순히 정보를 기억하는 데서 나아가, 그 의미와 맥락을 잘 파악하고 있었습니다. 
      개념 간의 관계를 이해하고 설명할 수 있는 능력이 향상되었으며, 이는 사고의 뼈대를 세우는 중요한 단계입니다. 
      앞으로 다양한 사례에 대한 해석과 설명을 시도해보면 더 좋은 성장을 기대할 수 있습니다.`,

        3: `이 달에는 배운 개념을 실제 상황에 적용해보는 시도가 돋보였습니다. 
      단순한 이해에 그치지 않고, 다양한 문제 상황에 맞게 지식을 유연하게 활용하는 모습이 인상적이었습니다. 
      이러한 응용력은 사고의 실천적 전환점을 의미하며, 더 복잡한 문제에도 자신감을 가지고 접근할 수 있도록 이끕니다.`,

        4: `개념이나 현상을 세분화하여 비교하거나 분류하고, 핵심 구조를 파악하려는 분석적 사고가 잘 드러났습니다. 
      이 단계는 단순한 적용을 넘어서, 왜 그렇게 작동하는지를 이해하고 설명하려는 노력의 결과입니다. 
      앞으로는 논리적 근거에 기반한 설명을 더 강화하면 심화된 분석 능력을 키울 수 있습니다.`,

        5: `이 달에는 다양한 관점을 고려하여 평가하거나 판단하는 사고 수준에 도달했습니다. 
      타당한 근거를 바탕으로 비교하고 결론을 내리는 과정에서 비판적 사고 역량이 향상되었고, 스스로의 사고를 성찰하는 능력 또한 강화되었습니다. 
      더 넓은 시야에서 문제를 바라보는 연습을 지속하면 더욱 성숙한 사고가 가능할 것입니다.`,

        6: `창의적인 아이디어를 제시하고, 기존의 개념들을 재구성하거나 새로운 방식으로 표현하려는 시도가 돋보였습니다. 
      이는 블룸의 최상위 사고 수준에 해당하는 ‘창출’ 단계로, 스스로의 사고를 독립적이고 창의적으로 발전시킬 수 있다는 강력한 증거입니다. 
      앞으로도 자유롭고 유연한 사고를 통해 새로운 관점과 해결책을 꾸준히 시도해 보세요.`,
    };

    const generatedComment = selectedData ? levelComments[getMostFrequentLevel(selectedData.levels)] : '';

    return (
        <Ic.Container>
            <Header />
            <Ic.Content>
                <Ic.MonthTitle onClick={() => setIsDropdownOpen((prev) => !prev)}>{selectedMonth} ▼</Ic.MonthTitle>
                {isDropdownOpen && (
                    <Ic.Dropdown>
                        {availableMonths.map((month) => (
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

                {selectedData && (
                    <>
                        <Ic.ChartBox>
                            <Ic.ChartBarGroup>
                                {selectedData.levels.map((value, i) => (
                                    <Ic.ChartBar key={i} height={`${value * 150}px`} color={levelColors[i]} />
                                ))}
                            </Ic.ChartBarGroup>
                            <Ic.ChartLabelGroup>
                                {['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'].map((label, i) => (
                                    <div key={i}>{label}</div>
                                ))}
                            </Ic.ChartLabelGroup>
                        </Ic.ChartBox>

                        {selectedData && (
                            <Ic.FeedbackBox>
                                {selectedData.comment ||
                                    generatedComment.split('\n').map((line, index) => <div key={index}>{line}</div>)}
                            </Ic.FeedbackBox>
                        )}
                    </>
                )}
            </Ic.Content>
            <Footer />
        </Ic.Container>
    );
};
export default InsightChart;
