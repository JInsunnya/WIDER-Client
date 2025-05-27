import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    margin: 0 auto;
    width: 393px;
    height: 80px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    z-index: 10;
    margin-left: -20px;
`;

export const Back = styled.div`
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
    }
    margin-left: 20px;
    z-index: 11;
`;

export const Title = styled.div`
    font-size: 25px;
    flex: 1;
    text-align: center;
    margin-left: -15%;
`;
