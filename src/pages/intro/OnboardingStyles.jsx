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

export const LogoImg = styled.div`
    img {
        width: 280px;
        height: 280px;
    }
`;

export const Title = styled.div`
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 60px;
    font-weight: bold;
`;

export const StartButton = styled.div`
    background-color: #6ba9ec;
    padding: 15px;
    width: 230px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    border-radius: 20px;
    margin-bottom: 25px;
    cursor: pointer;
`;

export const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #616161;
    gap: 10px;
`;

export const LoginButton = styled.div`
    color: #6ba9ec;
    font-weight: bold;
    cursor: pointer;
`;
