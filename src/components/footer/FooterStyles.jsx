import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 393px;
    height: 110px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #eeecec;
    z-index: 100;
    gap: 20px;
`;

export const Record = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

export const RecordImg = styled.div`
    img {
        width: 50px;
        height: 50px;
    }
`;

export const RecordText = styled.div`
    color: ${({ isActive }) => (isActive ? '#6BA9EC' : '#ada7a7')};
    font-size: 16px;
`;

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-bottom: 4px;
    cursor: pointer;
`;

export const HomeImg = styled.div`
    img {
        width: 55px;
        height: 55px;
    }
`;

export const HomeText = styled.div`
    color: ${({ isActive }) => (isActive ? '#6BA9EC' : '#ada7a7')};
    font-size: 16px;
`;

export const Insight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

export const InsightImg = styled.div`
    img {
        width: 50px;
        height: 50px;
    }
`;

export const InsightText = styled.div`
    color: ${({ isActive }) => (isActive ? '#6BA9EC' : '#ada7a7')};
    font-size: 16px;
`;
