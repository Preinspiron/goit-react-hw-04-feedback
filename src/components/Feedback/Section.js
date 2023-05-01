import PropTypes from 'prop-types';
import { Notification } from './Notification';

export const Section = ({ title, children, positive }) => {
  return (
    <>
      {positive === 0 ? (
        <Notification message={'no statistics'} />
      ) : (
        <>
          <h2>{title}</h2>
          <div>{children}</div>
        </>
      )}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  positive: PropTypes.number,
};
