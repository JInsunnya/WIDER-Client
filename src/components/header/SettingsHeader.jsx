import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Sh from './SettingsHeaderStyles.jsx';
import Logo from '../../assets/LogoIcon.png';
import Rectangle from '../../assets/Rectangle.svg';
import Setting from '../../assets/Setting.png';

const SettingsHeader = () => {
    const location = useLocation();

    const titleText =
        location.pathname === '/insight'
            ? '상반기 히스토그램을 확인 해 보세요!'
            : location.pathname === '/insightchart'
            ? '월별 히스토그램을 확인해 보세요!'
            : '리포트 기록을 확인해 보세요!';

    return (
        <Sh.Container>
            <Sh.Left>
                <Sh.Logo>
                    <img src={Logo} />
                </Sh.Logo>
                <Sh.Title>
                    <Sh.Rectangle>
                        <img src={Rectangle} />
                    </Sh.Rectangle>
                    <Sh.TitleText>{titleText}</Sh.TitleText>
                </Sh.Title>
            </Sh.Left>
            <Sh.Right>
                <Sh.Setting>
                    <img src={Setting} />
                </Sh.Setting>
            </Sh.Right>
        </Sh.Container>
    );
};
export default SettingsHeader;
