import { Stats } from './Feedback.styled';

export const Statistics = ({ stats: { good, neutral, bad } }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    (good / countTotalFeedback()) * 100;

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
