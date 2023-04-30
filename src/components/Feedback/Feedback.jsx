// import PT from 'prop-types';
import { FeedbackSection } from './Feedback.styled';
// import { Statistics } from './Statistics';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <FeedbackSection>
      <h2>Please leave feedback</h2>
      <div>
        {options.map(btn => (
          <button
            key={btn}
            name={btn}
            className="btn"
            onClick={onLeaveFeedBack}
          >
            {btn}
          </button>
        ))}
      </div>
      {/* <Statistics stats={stats} /> */}
    </FeedbackSection>
  );
};

export default FeedbackOptions;
/* Profile.propTypes = {
  username: PT.string.isRequired,
  tag: PT.string.isRequired,
  location: PT.string.isRequired,
  avatar: PT.string.isRequired,
  stats: PT.any.isRequired,
}; */
