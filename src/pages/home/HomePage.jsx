import React, { useEffect, useState } from 'react';
import HomeMobile from './HomeScreen';
import HomeDesktop from './HomeDeskScreen';

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default HomePage;
