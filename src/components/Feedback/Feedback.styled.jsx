import styled from '@emotion/styled';

export const FeedbackSection = styled.div`
  color: black;
  background-color: grey;
  padding: 30px;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: no-wrap;

  .btn {
    width: 200px;
    height: 100px;
    font-size: 24px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img {
    width: 200px;
    border-radius: 50%;
  }
`;

export const Stats = styled.ul`
  background-color: white;
  display: flex;
  gap: 30px;
  padding: 30px;
`;
