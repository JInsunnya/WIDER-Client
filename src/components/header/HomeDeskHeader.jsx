import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as Dh from './HomeDeskHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Report from '../../assets/Report.png';

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
                <Dh.Title>WIDER</Dh.Title>
                <Dh.Text>내 생각을 키워주는 AI 파트너</Dh.Text>
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
