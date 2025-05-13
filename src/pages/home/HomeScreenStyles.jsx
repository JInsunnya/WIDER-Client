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
    background-color: #f9f9f9;
`;

export const Header = styled.div`
    background-color: #d8eaff;
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
        height: 60px;
    }
    margin-left: 20px;
`;

export const HeaderText = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

export const ServiceName = styled.div`
    font-size: 24px;
`;

export const ServiceTagline = styled.div`
    font-size: 13px;
`;

export const BellOff = styled.div`
    img {
        width: 60px;
        height: 60px;
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
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    border-radius: 110px;
    font-size: 18px;
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
