import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
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
    z-index: 10;
    margin-left: 100px;
`;

export const ArrowLeft = styled.div`
    position: absolute;
    left: 0px;
    top: 15px;
    img {
        width: 30px;
        height: 30px;
    }
    cursor: pointer;
`;

export const HeaderText = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 4%;
`;

export const Content = styled.div`
    margin-top: 3%;
`;

export const Level = styled.div`
    font-size: 46px;
    color: #6ba9ec;
    font-weight: bold;
    margin-left: 100px;
`;

export const LevelDescription = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 15px;
    margin-left: 100px;
`;

export const Feedback = styled.div`
    color: #383636;
    margin-top: 1%;
    margin-left: 100px;
`;

export const FeedbackTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

export const Summary = styled.div`
    color: #383636;
    margin-top: 5%;
    text-align: left;
    margin-bottom: 5%;
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

export const FeedbackContent = styled.div`
    color: #383636;
    margin-top: 5%;
    text-align: left;
`;

export const FeedbackContentTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    margin-top: 5%;
`;

export const FeedbackContentText = styled.div`
    font-size: 13px;
    margin-top: 5%;
`;

export const Suggestion = styled.div`
    color: #383636;
    margin-top: 5%;
    text-align: left;
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
    font-size: 12.5px;
    font-weight: bold;
    color: #383636;
    background-color: #dff1ff;
    border-radius: 20px;
    margin-top: 5%;
    width: 95%;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px 20px;
`;

export const Grid = styled.div`
    display: flex;
    width: 100%;
    max-width: 900px;
    margin: 5% auto 0 auto;
    gap: 40px;
    justify-content: space-between;
    padding-left: 100px;
    margin-top: 8%;
`;

export const LeftColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const RightColumn = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const LineVertical = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0 20px;

    img {
        height: 100%;
        width: 1px;
    }
`;
