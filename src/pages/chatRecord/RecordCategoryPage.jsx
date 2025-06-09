import React, { useEffect, useState } from 'react';
import RecordCategory from './RecordCategory';
import RecordCategoryDesk from './RecordCategoryDesk';

const RecordCategoryPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <RecordCategory /> : <RecordCategoryDesk />;
};

export default RecordCategoryPage;
