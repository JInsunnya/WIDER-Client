import React, { useEffect, useState } from 'react';
import SettingMobile from '../insight/Insight';
import SettingDesktop from './Setting';

const SettingPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <SettingMobile /> : <SettingDesktop />;
};

export default SettingPage;
