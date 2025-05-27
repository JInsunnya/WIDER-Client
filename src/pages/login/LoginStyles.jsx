import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    padding: 5px 20px 50px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
`;

export const Content = styled.div`
    margin-top: 130px;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
`;

export const Text = styled.div`
    font-size: 22px;
    margin-top: 50px;
`;

export const Input = styled.input`
    margin-top: 10px;
    width: 90%;
    height: 50px;
    font-size: 16px;
    padding: 0 15px;
    border: 2px solid #d0cccc;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: white;
    color: black;

    &::placeholder {
        color: #999;
    }

    &:focus {
        outline: none;
        border: 2px solid #6ba9ec;
    }
`;

export const StartButton = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: white;
    background-color: #6ba9ec;
    border-radius: 20px;
    width: 90%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
`;
