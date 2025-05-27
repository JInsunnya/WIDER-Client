import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
    margin-left: 130px;
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    width: 90%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-radius: 20px;
    padding: 50px 15px 100px;
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
