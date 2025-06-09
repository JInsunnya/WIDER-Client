import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #f9f9f9;
    z-index: 10;
`;

export const TopNav = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: -10px;
`;

export const BottomNav = styled.div`
    margin-top: 250px;
`;

export const Chat = styled.div`
    img {
        width: 85px;
        height: 85px;
    }
    cursor: pointer;
`;

export const Home = styled.div`
    img {
        width: 85px;
        height: 85px;
    }
    cursor: pointer;
`;

export const Record = styled.div`
    img {
        width: 85px;
        height: 85px;
    }
    cursor: pointer;
`;

export const Insight = styled.div`
    img {
        width: 85px;
        height: 85px;
    }
    cursor: pointer;
`;

export const Setting = styled.div`
    img {
        width: 85px;
        height: 85px;
    }
    cursor: pointer;
`;
