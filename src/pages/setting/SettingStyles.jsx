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

export const Content = styled.div`
    padding: 80px;
    width: 100%;
    margin-top: 10%;
    margin-left: 10%;
`;

export const Section = styled.div`
    margin-bottom: 32px;
    width: 90%;
`;

export const SectionTitle = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
`;

export const Box = styled.div`
    background-color: #dff1ff;
    border-radius: 16px;
    padding: 20px;
`;

export const ItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    font-size: 16px;
    margin-left: 15px;

    cursor: ${({ $nonHover }) => ($nonHover ? 'default' : 'pointer')};

    ${({ $nonHover }) =>
        !$nonHover &&
        `
        &:hover {
            background-color: #bee2fd;
            border-radius: 10px;
        }
    `}
`;

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;
`;

export const PasswordInput = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

export const SubmitButton = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: #6ba9ec;
    color: white;
    border: none;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: #4894e5;
    }
`;
