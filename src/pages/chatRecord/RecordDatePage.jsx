import React, { useEffect, useState } from 'react';
import RecordDate from './RecordDate';
import RecordDateDesk from './RecordDateDesk';

const RecordDatePage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <RecordDate /> : <RecordDateDesk />;
};

export default RecordDatePage;
