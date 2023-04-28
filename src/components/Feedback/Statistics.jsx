import { Stats } from './Feedback.styled';

export const Statistics = ({ stats: { good, neutral, bad } }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    (countTotalFeedback() * 100) / good / countTotalFeedback();

  // const Positive = (total / good) * 100;
  return (
    <Stats>
      <h2>Statistics</h2>
      {countTotalFeedback() === 0 ? (
        'no feedback available'
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {countTotalFeedback()}</li>
          <li>Positive: {countPositiveFeedbackPercentage()}%</li>
        </ul>
      )}
    </Stats>
  );
};
