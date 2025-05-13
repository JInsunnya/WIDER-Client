import React, { useEffect, useState } from 'react';
import ReportMobile from './ReportScreen';
import ReportDesktop from './ReportDeskScreen';

const ReportPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <ReportMobile /> : <ReportDesktop />;
};

export default ReportPage;
