import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 90%;
    max-width: 1200px;
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

export const Content = styled.div`
    flex: 1;
    padding: 60px 80px;
    padding: 40px;
    margin-top: 10%;
`;

export const MonthTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;
    display: inline-block;
`;

export const ChartBox = styled.div`
    background-color: #f6f6f6;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ChartBarGroup = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 8px;
    height: 280px;
    width: 100%;
`;

export const ChartBar = styled.div`
    width: 13%;
    height: ${({ height }) => height};
    max-height: 280px;
    background-color: ${({ color }) => color};
    border-radius: 6px;
    transition: height 0.3s;
`;

export const ChartLabelGroup = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #444;
`;

export const FeedbackBox = styled.div`
    background-color: #f6f6f6;
    border-radius: 20px;
    padding: 30px;
    font-weight: bold;
    font-size: 15px;
    color: #383636;
    line-height: 1.5;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 180px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    width: 120px;
`;

export const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    &:hover {
        background-color: #f0f0f0;
    }
`;
