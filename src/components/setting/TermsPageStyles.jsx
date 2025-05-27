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
    background-color: #ffffff;
`;

export const ArrowLeft = styled.div`
    cursor: pointer;
`;

export const TitleWider = styled.div`
    font-size: 24px;
    color: #6ba9ec;
    font-weight: bold;
    margin-top: 30px;
`;

export const TitleText = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-top: 5px;
`;

export const TermsRequired = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    margin-top: 50px;
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
    font-size: 18px;
    font-weight: bold;
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
    font-size: 18px;
    font-weight: bold;
`;

export const PrivacyRequiredImgArrow = styled.div`
    cursor: pointer;
`;
