import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 393px;
    height: 100vh;
    min-height: 100vh;
    overflow-y: auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 393px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1%;
    z-index: 10;
`;

export const ArrowLeft = styled.div`
    position: absolute;
    left: 40px;
    top: 15px;
    img {
        width: 30px;
        height: 30px;
    }
`;

export const HeaderText = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-left: 4%;
`;

export const Content = styled.div`
    flex: 1;
    margin-top: 10px;
    padding: 0 40px 100px 40px;
    overflow-y: auto;
    height: calc(100vh - 60px);
    width: 100%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Level = styled.div`
    font-size: 33px;
    color: #6ba9ec;
    font-weight: bold;
`;

export const Feedback = styled.div`
    color: #383636;
    margin-top: 5%;
`;

export const FeedbackTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const FeedbackContent = styled.div`
    font-size: 13px;
    margin-top: 5%;
`;

export const Line = styled.div`
    margin-top: 1%;
`;

export const Summary = styled.div`
    color: #383636;
    margin-top: 5%;
`;

export const SummaryTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin-top: 5%;
`;

export const SummaryContent = styled.div`
    font-size: 13px;
    margin-top: 5%;
`;

export const Suggestion = styled.div`
    color: #383636;
    margin-top: 5%;
`;

export const SuggestionTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`;

export const SuggestionSubTitle = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin-top: 5%;
`;

export const SuggestionContent = styled.div`
    font-size: 13px;
    margin-top: 1%;
`;

export const Example = styled.div`
    margin-top: 5%;
`;

export const ExampleContent = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: #383636;
    background-color: #dff1ff;
    border-radius: 20px;
    margin-top: 5%;
    width: 150%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
