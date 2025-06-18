import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff;
`;

export const Header = styled.div`
    background-color: #91c0f2;
    position: fixed;
    top: 0;
    width: 393px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
`;

export const LogoIcon = styled.div`
    img {
        width: 70px;
        height: 70px;
    }
    margin-left: 20px;
`;

export const HeaderText = styled.div`
    position: relative;
    width: 180px;
    height: 50px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #4e4e4e;
    font-weight: bold;
    font-size: 12px;
    margin-left: -25px;
`;

export const ServiceName = styled.div`
    font-weight: bold;
    font-size: 12px;
    color: #4e4e4e;
`;

export const ServiceTagline = styled.div`
    font-size: 12px;
    color: #4e4e4e;
`;

export const BackgroundImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 50px;
    object-fit: contain;
    z-index: 0;
`;

export const BellOff = styled.div`
    img {
        width: 50px;
        height: 50px;
        opacity: 0.5;
    }
    margin-right: 20px;
    cursor: pointer;
`;

export const Content = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #777373;
`;

export const Question = styled.div`
    background-color: #e6f7ff;
    width: 300px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    border-radius: 110px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;

export const StartConversation = styled.div`
    font-size: 22px;
    font-weight: bold;
`;

export const ReportCreated = styled.div`
    font-size: 16px;
    color: #8b8b8b;
`;

export const ButtonReport = styled.div`
    font-size: 16px;
    color: #8b8b8b;
    margin-top: -25px;
    text-decoration: underline;
    cursor: pointer;
`;
