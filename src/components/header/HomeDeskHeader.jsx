import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Dh from './HomeDeskHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';
import RectangleHeader from '../../assets/RectangleHeader.svg';

const HomeDeskHeader = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const goToReport = () => {
        navigate('/report');
    };

    return (
        <Dh.Container>
            <Dh.Logo>
                <img src={Logo} />
            </Dh.Logo>
            <Dh.Body>
                <Dh.BackgroundImg src={RectangleHeader} />
                {location.pathname.startsWith('/record') ? (
                    <Dh.TextRecord>리포트 기록을 확인해 보세요!</Dh.TextRecord>
                ) : location.pathname === '/insight' ? (
                    <Dh.TextRecord>상반기 히스토그램을 확인해 보세요!</Dh.TextRecord>
                ) : location.pathname === '/insightchart' ? (
                    <Dh.TextRecord>월별 히스토그램을 확인해 보세요!</Dh.TextRecord>
                ) : (
                    <>
                        <Dh.Title>나의 AI 파트너, WIDER와</Dh.Title>
                        <Dh.Text>오늘의 대화를 시작해 보세요!</Dh.Text>
                    </>
                )}
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
