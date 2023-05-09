import { useState } from 'react';
import { Container } from './App.styled.js';
import FeedbackOptions, { Statistics, Section } from '../Feedback';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtons = e => {
    const INCRMT = 1;
    const { name } = e.target;
    switch (name) {
      case 'Good':
        setGood(prev => prev + 1);
        break;
      case 'Bad':
        setBad(prev => prev + 1);
        break;
      case 'Neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        break;
    }

    // setState(prev => {
    //   return { [name]: prev[name] + INCRMT };
    // });
  };
  const positivePercentage = () => {
    // const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // const { good, neutral, bad } = this.state;
  const positive = positivePercentage();
  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedBack={handleButtons}
        />
      </Section>
      <Section title={'Statistics'} positive={positive}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          positivePercentage={positivePercentage}
        />
      </Section>

      {/* <Feedback stats={this.state} handleButtons={this.handleButtons} /> */}
    </Container>
  );
};
