import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    padding: 0;
    padding-top: 100px;
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

export const Date = styled.div`
    position: fixed;
    top: 110px;
    width: 393px;
    left: 50%;
    width: fit-content;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    z-index: 1;
`;

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
`;

export const Chatbot = styled.div`
    align-self: flex-start;
    background-color: #f5f5f5;
    padding: 20px 26px;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    width: fit-content;
    width: 70%;
    line-height: 1.6;
    max-width: 60%;
    min-height: 50px;
    margin-left: -20px;
`;

export const ChatUser = styled.div`
    align-self: flex-end;
    background-color: #d8f2ff;
    padding: 20px 26px;
    border-radius: 20px;
    font-size: 16px;
    text-align: center;
    width: fit-content;
    line-height: 1.6;
    max-width: 70%;
    min-height: 50px;
    margin-right: -20px;
`;

export const InputBox = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    z-index: 2;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 60px;
    max-width: 80%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0px 45px 0px 20px;
    border-radius: 20px;
    border: 1px solid #000000;
    font-size: 16px;
    outline: none;
    height: 45px;
    box-sizing: border-box;
`;

export const Send = styled.div`
    position: absolute;
    top: 50%;
    right: 75px;
    transform: translateY(-50%);
    cursor: pointer;
    img {
        width: 23px;
        height: 23px;
    }
`;
