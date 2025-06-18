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

export const TermSelector = styled.div`
    font-weight: bold;
    margin-top: 19%;
    margin-bottom: -2%;
    position: relative;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 30px;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 5px 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    div {
        padding: 6px 14px;
        cursor: pointer;
        &:hover {
            background-color: #f0f0f0;
        }
    }
`;

export const Content = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 40px;
`;

export const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
    cursor: pointer;
`;

export const ChartBox = styled.div`
    background-color: #f6f6f6;
    border-radius: 20px;
    padding: 10px;
`;

export const MonthText = styled.div`
    font-size: 14px;
    text-align: right;
    margin-bottom: 8px;
`;

export const ChartBarGroup = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
`;

export const ChartBar = styled.div`
    width: 16%;
    height: ${({ height }) => height || '40px'};
    background-color: ${({ color }) => color || '#8ec9ff'};
    border-radius: 4px;
`;

export const ChartLabelGroup = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #555;
    margin-top: 5px;
`;
