import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from './TermsPageStyles.jsx';
import ArrowRight from '../../assets/ArrowRight.png';
import ArrowLeft from '../../assets/ArrowLeft.png';

const TermsPage = () => {
    const navigate = useNavigate();

    const goToServiceTerms = () => {
        navigate('/serviceterms');
    };

    const goToPrivacyTerms = () => {
        navigate('/privacyterms');
    };

    const goToBack = () => {
        navigate(-1);
    };

    return (
        <T.Container>
            <T.ArrowLeft onClick={goToBack}>
                <img src={ArrowLeft} />
            </T.ArrowLeft>
            <T.TitleWider>WIDER</T.TitleWider>
            <T.TitleText>약관 동의</T.TitleText>
            <T.TermsRequired>
                <T.TermsRequiredText>WIDER 서비스 이용 약관</T.TermsRequiredText>
                <T.TermsRequiredImgArrow onClick={goToServiceTerms}>
                    <img src={ArrowRight} />
                </T.TermsRequiredImgArrow>
            </T.TermsRequired>
            <T.PrivacyRequired>
                <T.PrivacyRequiredText>개인정보 수집 이용 동의</T.PrivacyRequiredText>
                <T.PrivacyRequiredImgArrow onClick={goToPrivacyTerms}>
                    <img src={ArrowRight} />
                </T.PrivacyRequiredImgArrow>
            </T.PrivacyRequired>
        </T.Container>
    );
};
export default TermsPage;
