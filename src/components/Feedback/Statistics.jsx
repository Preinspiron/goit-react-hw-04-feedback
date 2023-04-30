import { Notification } from './Notification';
import { Stats } from './Feedback.styled';

export const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  const Positive = (good / positivePercentage()) * 100;
  return (
    <Stats>
      {positivePercentage() === 0 ? (
        <Notification message={'no statistics'} />
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {positivePercentage()}</li>
          <li>Positive: {Math.round(Positive)}%</li>
        </ul>
      )}
    </Stats>
  );
};
