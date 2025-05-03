import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 130px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    background-color: #d8eaff;
    z-index: 9;
`;

export const Logo = styled.div`
    img {
        width: 80px;
        height: 70px;
    }
    margin-right: 30px;
    margin-left: 50px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Title = styled.div`
    font-size: 28px;
    font-weight: bold;
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: bold;
`;
