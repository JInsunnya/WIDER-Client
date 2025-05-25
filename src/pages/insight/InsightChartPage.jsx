import React, { useEffect, useState } from 'react';
import InsightChartMobile from './InsightChart';
import InsightChartDesktop from './InsightChartDesk';

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <InsightChartMobile /> : <InsightChartDesktop />;
};

export default HomePage;
