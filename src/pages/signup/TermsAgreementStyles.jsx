import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
`;

export const TitleWider = styled.div`
    font-size: 24px;
    color: #0a84ff;
    font-weight: bold;
    margin-top: 30px;
`;

export const TitleText = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
`;

export const ButtonAgreement = styled.div`
    border: 1px solid ${({ $allChecked }) => ($allChecked ? '#0a84ff' : '#d0cccc')};
    color: ${({ $allChecked }) => ($allChecked ? '#0a84ff' : '#d0cccc')};
    padding: 15px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 40px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
`;

export const TermsRequired = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const TermsRequiredImgCheck = styled.div`
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
`;

export const TermsRequiredText = styled.div`
    margin-left: -40px;
`;

export const TermsRequiredImgArrow = styled.div`
    cursor: pointer;
`;

export const PrivacyRequired = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const PrivacyRequiredImgCheck = styled.div`
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
`;

export const PrivacyRequiredText = styled.div`
    margin-left: -50px;
`;

export const PrivacyRequiredImgArrow = styled.div`
    cursor: pointer;
`;

export const MarketingOptional = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const MarketingOptionalImgCheck = styled.div`
    img {
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
`;

export const MarketingOptionalText = styled.div`
    margin-left: -90px;
`;

export const MarketingOptionalImgArrow = styled.div``;
