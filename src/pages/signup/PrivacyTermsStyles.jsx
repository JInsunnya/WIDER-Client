import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    padding: 0px 20px 50px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    overflow-y: auto;
`;

export const Content = styled.div`
    margin-top: 170px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 26px;
    font-weight: bold;
    margin-top: -20%;
`;

export const Text = styled.div`
    line-height: 1.5;
    font-size: 17px;
    margin-top: 20px;
`;

export const SubTitle = styled.div`
    font-size: 19px;
    font-weight: bold;
    margin-top: 20px;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
`;

export const NumberMain = styled.div`
    width: 20px;
    flex-shrink: 0;
    font-size: 25px;
    margin-top: -8px;
`;

export const ListText = styled.div`
    flex: 1;
    font-size: 17px;
    line-height: 1.5;
    margin-top: -3px;
`;

export const NumberSub = styled.div`
    width: 20px;
    flex-shrink: 0;
    margin-left: 30px;
`;

export const PrivacyTable = styled.div`
    margin-top: 20px;
    img {
        width: 350px;
        height: 120px;
    }
`;
