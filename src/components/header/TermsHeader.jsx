import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Th from './TermsHeaderStyles.jsx';
import Back from '../../assets/Back.png';

const TermsHeader = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <Th.Container>
            <Th.Back onClick={handleBack}>
                <img src={Back} />
            </Th.Back>
            <Th.Title>약관</Th.Title>
        </Th.Container>
    );
};
export default TermsHeader;
