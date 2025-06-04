import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from './LandingStyles.jsx';
import Logo from '../../assets/Logo.png';

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/onboarding');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/onboarding');
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <L.Container onClick={handleClick}>
            <L.LogoImg>
                <img src={Logo} />
            </L.LogoImg>
        </L.Container>
    );
};
export default Landing;
