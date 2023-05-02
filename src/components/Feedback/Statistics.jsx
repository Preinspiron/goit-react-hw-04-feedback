import PropTypes from 'prop-types';
import { Stats } from './Feedback.styled';

export const Statistics = ({ good, neutral, bad, positivePercentage }) => {
  const Positive = (good / positivePercentage()) * 100;
  return (
    <Stats>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {positivePercentage()}</li>
        <li>Positive: {Math.round(Positive)}%</li>
      </ul>
    </Stats>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.func,
};
