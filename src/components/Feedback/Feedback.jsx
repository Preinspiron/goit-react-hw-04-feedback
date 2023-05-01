import PropTypes from 'prop-types';
import { FeedbackSection } from './Feedback.styled';
// import { Statistics } from './Statistics';

const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return (
    <FeedbackSection>
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedBack: PropTypes.func,
};
