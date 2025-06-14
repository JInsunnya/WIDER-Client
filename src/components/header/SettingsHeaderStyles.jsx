import { styled } from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 393px;
    height: 80px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: #91c0f2;
    z-index: 10;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
`;

export const Logo = styled.div`
    img {
        width: 65px;
        height: 65px;
    }
`;

export const Title = styled.div`
    position: relative;
    min-width: 300px;
    height: 50px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #4e4e4e;
    font-weight: bold;
    font-size: 12px;
    flex-shrink: 0;
`;

export const Rectangle = styled.div`
    position: absolute;
    left: 10px;
    top: 5;
    img {
        width: 210px;
        height: 90px;
    }
`;

export const TitleText = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #4e4e4e;
    font-weight: bold;
    white-space: nowrap;
    z-index: 1;
    white-space: pre-line;
`;

export const ServiceName = styled.div`
    font-size: 12px;
    color: #4e4e4e;
`;

export const ServiceTagline = styled.div`
    font-size: 12px;
    color: #4e4e4e;
`;

export const HeaderText = styled.div`
    margin-left: -60px;
`;
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const Setting = styled.div`
    img {
        width: 45px;
        height: 45px;
    }
    cursor: pointer;
    position: relative;
`;

export const DropdownBox = styled.div`
    position: absolute;
    top: 80px;
    right: 20px;
    width: 260px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 10;
`;

export const SectionTitle = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const ItemRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 14px;
    cursor: pointer;

    ${({ nonHover }) =>
        !nonHover &&
        `
        &:hover {
            background-color: #f2f2f2;
            border-radius: 10px;
        }
    `}
`;

export const PasswordOverlay = styled.div`
    position: absolute;
    top: 80px;
    right: 20px;
    width: 280px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    z-index: 999;
    padding: 20px;
`;

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Input = styled.input`
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    &:focus {
        outline: none;
        border: 2px solid #6ba9ec;
    }
`;

export const SubmitButton = styled.button`
    padding: 10px;
    background-color: #6ba9ec;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: #4091e8;
    }
`;

export const ConfirmText = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const LogoutButton = styled.button`
    padding: 10px;
    width: 80%;
    margin: 0 auto;
    background-color: #6ba9ec;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
        background-color: #4091e8;
    }
`;
