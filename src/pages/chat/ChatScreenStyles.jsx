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

export const ArrowLeft = styled.div`
    img {
        width: 30px;
        height: 30px;
    }
    margin-left: 20px;
    cursor: pointer;
`;

export const LogoIcon = styled.div`
    img {
        width: 60px;
        height: 60px;
    }
    margin-left: -5px;
`;

export const HeaderText = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: -25px;
    position: relative;
    width: 180px;
    height: 50px;
    align-items: center;
    justify-content: center;
    color: #4e4e4e;
    font-weight: bold;
    font-size: 12px;
    padding: 10px 10px;
    font-size: 12px;
`;

export const ServiceName = styled.div`
    position: relative;
    z-index: 1;
`;

export const ServiceTagline = styled.div`
    position: relative;
    z-index: 1;
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

export const Report = styled.div`
    img {
        width: 50px;
        height: 50px;
    }
    margin-right: 20px;
    cursor: pointer;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    /* margin-top: -70%; */
    width: 100%;
    max-height: calc(100vh - 180px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* margin-top: -50%; */
`;

export const Date = styled.div`
    /* position: fixed; */
    top: 90px;
    width: 393px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
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
    padding: 14px 18px;
    border-radius: 20px;
    font-size: 14px;
    text-align: center;
    width: 70%;
    line-height: 1.6;
    max-width: 70%;
    min-height: 50px;
`;

export const ChatUser = styled.div`
    align-self: flex-end;
    background-color: #d8f2ff;
    padding: 14px 18px;
    border-radius: 20px;
    font-size: 14px;
    text-align: center;
    width: 70%;
    line-height: 1.6;
    max-width: 70%;
    min-height: 50px;
`;

export const InputBox = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 35px;
    z-index: 2;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Input = styled.input`
    padding: 0px 180px 0px 20px;
    border-radius: 20px;
    border: 1px solid #6ba9ec;
    font-size: 14px;
    outline: none;
    height: 45px;
    box-sizing: border-box;
`;

export const Send = styled.div`
    position: absolute;
    top: 25%;
    right: 15px;
    cursor: pointer;
    img {
        width: 23px;
        height: 23px;
    }
`;
