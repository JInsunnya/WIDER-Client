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
        width: 70px;
        height: 70px;
    }
    margin-left: 0px;
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
    padding: 10px 10px;
    margin-left: -25px;
`;

export const HeaderContent = styled.div`
    position: relative;
    z-index: 1;
    font-size: 16px;
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

export const Content = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const NotificationOn = styled.div`
    background-color: #e6f7ff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
`;

export const NotificationOnImg = styled.div``;

export const NotificationTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`;

export const NotificationTitle = styled.div`
    font-weight: bold;
    margin-top: 5px;
    text-align: left;
    padding: 0 5px;
`;

export const NotificationDate = styled.div`
    margin-bottom: 5px;
    margin-left: 5px;
`;

export const NotificationOff = styled.div`
    background-color: #e6f7ff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
`;

export const NotificationOffImg = styled.div``;
