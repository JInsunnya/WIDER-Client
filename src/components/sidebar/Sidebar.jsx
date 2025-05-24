import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as S from './SidebarStyles.jsx';
import ChatOn from '../../assets/ChatOn.svg';
import ChatOff from '../../assets/ChatOff.svg';
import HomeOn from '../../assets/HomeDeskOn.svg';
import HomeOff from '../../assets/HomeDeskOff.svg';
import RecordOn from '../../assets/RecordDeskOn.svg';
import RecordOff from '../../assets/RecordDeskOff.svg';
import InsightOn from '../../assets/InsightDeskOn.svg';
import InsightOff from '../../assets/InsightDeskOff.svg';
import SettingOn from '../../assets/SettingDeskOn.svg';
import SettingOff from '../../assets/SettingDeskOff.svg';

const Sidebar = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/chat');
    };

    const goToHome = () => {
        navigate('/home');
    };

    const goToRecord = () => {
        navigate('/recordcategory');
    };

    const goToInsight = () => {
        navigate('/insight');
    };

    const goToSetting = () => {
        navigate('/settingdesk');
    };

    return (
        <S.Container>
            <S.TopNav>
                <S.Chat onClick={goToChat}>
                    <img src={location.pathname === '/chat' || location.pathname === '/report' ? ChatOn : ChatOff} />
                </S.Chat>
                <S.Home onClick={goToHome}>
                    <img src={location.pathname === '/home' ? HomeOn : HomeOff} />
                </S.Home>
                <S.Record onClick={goToRecord}>
                    <img
                        src={
                            location.pathname === '/recordcategory' || location.pathname === '/recorddate'
                                ? RecordOn
                                : RecordOff
                        }
                    />
                </S.Record>
                <S.Insight onClick={goToInsight}>
                    <img
                        src={
                            location.pathname === '/insight' || location.pathname === '/insightchart'
                                ? InsightOn
                                : InsightOff
                        }
                    />
                </S.Insight>
            </S.TopNav>
            <S.BottomNav>
                <S.Setting onClick={goToSetting}>
                    <img src={location.pathname === '/setting' ? SettingOn : SettingOff} />
                </S.Setting>
            </S.BottomNav>
        </S.Container>
    );
};
export default Sidebar;
