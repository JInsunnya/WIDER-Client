import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
`;

export const Content = styled.div`
    margin-top: 5%;
`;

export const Title = styled.div`
    color: #777373;
    font-size: 38px;
    font-weight: bold;
    margin-left: -70%;
    margin-bottom: 8%;
`;

export const Question = styled.div`
    background-color: #e6f7ff;
    border-radius: 100px;
    height: 200px;
    width: 650px;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 110px;
    cursor: pointer;
`;

export const StartConversation = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin-top: 60px;
    margin-bottom: 60px;
`;

export const ReportCreated = styled.div`
    font-size: 22px;
    color: #8b8b8b;
`;

export const ButtonReport = styled.div`
    font-size: 22px;
    color: #8b8b8b;
    text-decoration: underline;
    cursor: pointer;
`;
