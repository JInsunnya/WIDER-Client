import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as F from './FooterStyles.jsx';
import RecordOff from '../../assets/RecordOff.png';
import RecordOn from '../../assets/RecordOn.png';
import HomeOff from '../../assets/HomeOff.png';
import HomeOn from '../../assets/HomeOn.png';
import InsightOff from '../../assets/InsightOff.png';
import InsightOn from '../../assets/InsightOn.png';

const Footer = () => {
    const location = useLocation();

    const navigate = useNavigate();

    const goToRecord = () => {
        navigate('/record');
    };

    const goToHome = () => {
        navigate('/home');
    };

    const goToInsight = () => {
        navigate('/insight');
    };

    return (
        <F.Container>
            <F.Record onClick={goToRecord}>
                <F.RecordImg>
                    <img src={location.pathname === '/records' ? RecordOn : RecordOff} />
                </F.RecordImg>
                <F.RecordText isActive={location.pathname === '/records'}>records</F.RecordText>
            </F.Record>
            <F.Home onClick={goToHome}>
                <F.HomeImg>
                    <img src={location.pathname === '/home' ? HomeOn : HomeOff} />
                </F.HomeImg>
                <F.HomeText isActive={location.pathname === '/home'}>home</F.HomeText>
            </F.Home>
            <F.Insight onClick={goToInsight}>
                <F.InsightImg>
                    <img src={location.pathname === '/insight' ? InsightOn : InsightOff} />
                </F.InsightImg>
                <F.InsightText isActive={location.pathname === '/insight'}>insight</F.InsightText>
            </F.Insight>
        </F.Container>
    );
};
export default Footer;
