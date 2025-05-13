import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from './TermsAgreementStyles.jsx';
import Unchecked from '../../assets/Unchecked.png';
import Checked from '../../assets/Checked.png';
import ArrowRight from '../../assets/ArrowRight.png';
// import ArrowDown from '../../assets/ArrowDown.png';

const TermsAgreement = () => {
    const navigate = useNavigate();

    const [termsChecked, setTermsChecked] = useState(true);
    const [privacyChecked, setPrivacyChecked] = useState(true);
    const [marketingChecked, setMarketingChecked] = useState(true);

    const toggleTerms = () => setTermsChecked(!termsChecked);
    const togglePrivacy = () => setPrivacyChecked(!privacyChecked);
    const toggleMarketing = () => setMarketingChecked(!marketingChecked);

    const allChecked = termsChecked && privacyChecked;

    const goToSignUp = () => {
        if (allChecked) {
            navigate('/signup');
        }
    };

    const goToServiceTerms = () => {
        navigate('/serviceterms');
    };

    const goToPrivacyTerms = () => {
        navigate('/privacyterms');
    };

    return (
        <T.Container>
            <T.TitleWider>WIDER</T.TitleWider>
            <T.TitleText>약관 동의가 필요합니다</T.TitleText>
            <T.ButtonAgreement $allChecked={allChecked} onClick={goToSignUp}>
                전체 약관 동의
            </T.ButtonAgreement>
            <T.TermsRequired>
                <T.TermsRequiredImgCheck onClick={toggleTerms}>
                    <img src={termsChecked ? Checked : Unchecked} />
                </T.TermsRequiredImgCheck>
                <T.TermsRequiredText>WIDER 서비스 이용 약관 (필수)</T.TermsRequiredText>
                <T.TermsRequiredImgArrow onClick={goToServiceTerms}>
                    <img src={ArrowRight} />
                </T.TermsRequiredImgArrow>
            </T.TermsRequired>
            <T.PrivacyRequired>
                <T.PrivacyRequiredImgCheck onClick={togglePrivacy}>
                    <img src={privacyChecked ? Checked : Unchecked} />
                </T.PrivacyRequiredImgCheck>
                <T.PrivacyRequiredText>개인정보 수집 이용 동의 (필수)</T.PrivacyRequiredText>
                <T.PrivacyRequiredImgArrow onClick={goToPrivacyTerms}>
                    <img src={ArrowRight} />
                </T.PrivacyRequiredImgArrow>
            </T.PrivacyRequired>
            {/* <T.MarketingOptional>
                <T.MarketingOptionalImgCheck onClick={toggleMarketing}>
                    <img src={marketingChecked ? Checked : Unchecked} />
                </T.MarketingOptionalImgCheck>
                <T.MarketingOptionalText>마케팅 이용 동의 (선택)</T.MarketingOptionalText>
                <T.MarketingOptionalImgArrow>
                    <img src={ArrowDown} />
                </T.MarketingOptionalImgArrow>
            </T.MarketingOptional> */}
        </T.Container>
    );
};
export default TermsAgreement;
