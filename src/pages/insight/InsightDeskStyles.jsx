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
    margin-left: 130px;
`;

export const TermSelector = styled.div`
    font-weight: bold;
    margin-top: 9%;
    margin-bottom: 3%;
    position: relative;
    font-size: 20px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    position: absolute;
    /* top: 30px;
    left: 0; */
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
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
    padding: 40px;
    width: 100%;
`;

export const ChartGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 60px;
    justify-content: center;
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
`;

export const ChartBox = styled.div`
    background-color: #f6f6f6;
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
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
    height: 160px;
`;

export const ChartBar = styled.div`
    width: 16%;
    height: ${({ height }) => height || '40px'};
    max-height: 160px;
    background-color: ${({ color }) => color || '#8ec9ff'};
    border-radius: 4px;
    transition: height 0.3s;
`;

export const ChartLabelGroup = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #555;
    margin-top: 5px;
`;
