import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-left: 130px;
`;

export const Content = styled.div`
    margin-top: 5%;
    padding-bottom: 100px;
    padding-top: 20px;
`;

export const Date = styled.div`
    width: fit-content;
    width: fit-content;
    font-size: 16px;
    font-weight: bold;
    padding: 0px 16px;
    z-index: 1;
    margin: 0 auto;
    margin-top: -1%;
    margin-bottom: 3%;
`;

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Chatbot = styled.div`
    background-color: #f5f5f5;
    padding: 20px 20px;
    border-radius: 20px;
    font-size: 16px;
    text-align: left;
    width: fit-content;
    line-height: 1.6;
    min-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 55%;
    margin-right: auto;
    margin-left: 30px;
`;

export const ChatUser = styled.div`
    background-color: #d8f2ff;
    padding: 20px 20px;
    border-radius: 20px;
    font-size: 16px;
    text-align: left;
    width: fit-content;
    line-height: 1.6;
    max-width: 55%;
    min-height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
`;

export const InputBox = styled.div`
    position: fixed;
    bottom: 0;
    left: 130px;
    width: 100%;
    width: calc(100% - 130px);
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    z-index: 2;
`;

export const InputBackground = styled.div`
    position: fixed;
    bottom: 0;
    left: 130px;
    width: calc(100% - 130px);
    height: 90px;
    background-color: white;
    z-index: 1;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 20px;
    max-width: 80%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0px 45px 0px 20px;
    border-radius: 20px;
    border: 1px solid #6ba9ec;
    font-size: 16px;
    outline: none;
    height: 45px;
    box-sizing: border-box;
`;

export const Send = styled.div`
    position: absolute;
    top: 50%;
    right: 35px;
    transform: translateY(-50%);
    cursor: pointer;
    img {
        width: 23px;
        height: 23px;
    }
`;
