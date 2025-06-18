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

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 20px;
    padding: 100px 15px 130px;
`;
export const CategoryContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #e6e4e4;
    border-radius: 20px;
    padding: 20px 30px;
    color: #383636;
    font-weight: bold;
`;

export const CategoryDate = styled.div`
    font-size: 16px;
    margin-right: 15px;
    white-space: nowrap;
`;

export const ContentTitle = styled.div`
    font-size: 16px;
    text-align: left;
    word-break: keep-all;
    margin-right: 10px;
`;

export const BloomLevel = styled.div`
    font-size: 17px;
    color: #383636;
    font-weight: bold;
    margin-bottom: 1px;
`;

export const EmptyMessage = styled.div`
    font-size: 16px;
    color: #888;
    margin-top: 50px;
    text-align: center;
`;
