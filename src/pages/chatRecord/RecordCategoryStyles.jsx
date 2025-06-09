import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
`;

export const Category = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 130px;
    min-height: 200px;
    height: 500px;
    margin-top: 20%;
`;

export const Content = styled.div`
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: #f8f8f8;
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
`;

export const CategoryName = styled.div`
    font-weight: bold;
    font-size: 18px;
    color: #383636;
    margin-bottom: -10px;
    align-self: flex-start;
    margin-left: 10px;
`;

export const CategoryContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #e6e4e4;
    border-radius: 20px;
    padding: 20px 15px;
    color: #383636;
    font-weight: bold;
`;

export const CategoryDate = styled.div`
    font-size: 16px;
    margin-right: 10px;
    white-space: nowrap;
`;

export const ContentTitle = styled.div`
    font-size: 16px;
    text-align: left;
    word-break: keep-all;
`;
