import React, { useEffect, useState } from 'react';
import ChatMobile from './ChatScreen';
import ChatDesktop from './ChatDeskScreen';

const ChatPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <ChatMobile /> : <ChatDesktop />;
};

export default ChatPage;
