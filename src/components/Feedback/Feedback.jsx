// import PT from 'prop-types';
import { FeedbackSection } from './Feedback.styled';
import { Statistics } from './Statistics';

const Feedback = ({ stats, handleButtons }) => {
  return (
    <FeedbackSection>
      <h2>Please leave feedback</h2>
      <div>
        <button name="good" className="btn" onClick={handleButtons}>
          Good
        </button>
        <button name="neutral" className="btn" onClick={handleButtons}>
          Neutral
        </button>
        <button name="bad" className="btn" onClick={handleButtons}>
          Bad
        </button>
      </div>
      <Statistics stats={stats} />
    </FeedbackSection>
  );
};

export default Feedback;
/* Profile.propTypes = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.any.isRequired,
}; */
