import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 130px;
    width: calc(100% - 130px);
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    background-color: #91c0f2;
    z-index: 9;
`;

export const Logo = styled.div`
    img {
        width: 90px;
        height: 90px;
    }
    margin-left: 50px;
`;

export const Body = styled.div`
    position: relative;
    width: 320px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4e4e4e;
    font-size: 18px;
    font-weight: bold;
`;

export const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    z-index: 1;
`;

export const BackgroundImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 80px;
    object-fit: cover;
    z-index: 0;
`;

export const Title = styled.div`
    position: relative;
    z-index: 1;
`;

export const Text = styled.div`
    position: relative;
    z-index: 1;
`;

export const Report = styled.div`
    img {
        width: 70px;
        height: 70px;
    }
    margin-left: auto;
    margin-right: 50px;
    cursor: pointer;
`;

export const TextRecord = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #4e4e4e;
    z-index: 1;
    position: relative;
    text-align: center;
`;
