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
