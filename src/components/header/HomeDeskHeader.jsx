import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Dh from './HomeDeskHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';
import RectangleHeader from '../../assets/RectangleHeader.svg';

const HomeDeskHeader = ({ sessionId }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToReport = () => {
        if (sessionId) {
            navigate('/report', {
                state: { sessionId },
            });
        } else {
            console.warn('sessionId 없음');
        }
    };

    return (
        <Dh.Container>
            <Dh.Logo>
                <img src={Logo} />
            </Dh.Logo>
            <Dh.Body>
                <Dh.BackgroundImg src={RectangleHeader} />
                <Dh.TextWrapper>
                    {location.pathname.startsWith('/record') ? (
                        <Dh.TextRecord>
                            이전 대화를 다시 보고 싶다면?
                            <br />
                            기록 목록에서 확인해 보세요!
                        </Dh.TextRecord>
                    ) : location.pathname === '/insight' ? (
                        <Dh.TextRecord>
                            WIDER와 함께한 사고 연습,
                            <br /> 그동안의 레벨 변화는 어땠을까요?
                        </Dh.TextRecord>
                    ) : location.pathname === '/insightchart' ? (
                        <Dh.TextRecord>
                            WIDER와 함께한 이번 달 사고 연습, <br /> 내 사고 레벨은 어디쯤일까요?
                        </Dh.TextRecord>
                    ) : location.pathname === '/setting' ? (
                        <Dh.TextRecord>나의 계정 정보를 확인해 보세요!</Dh.TextRecord>
                    ) : (
                        <>
                            <Dh.Title>나의 AI 파트너, WIDER와</Dh.Title>
                            <Dh.Text>오늘의 대화를 시작해 보세요!</Dh.Text>
                        </>
                    )}
                </Dh.TextWrapper>
            </Dh.Body>
            {location.pathname === '/chat' && (
                <Dh.Report onClick={goToReport}>
                    <img src={Report} />
                </Dh.Report>
            )}
        </Dh.Container>
    );
};
export default HomeDeskHeader;
