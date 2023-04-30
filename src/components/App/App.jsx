import { Component } from 'react';
import { Container } from './App.styled.js';
import FeedbackOptions, { Statistics, Section } from '../Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtons = e => {
    const INCRMT = 1;
    const { name } = e.target;
    this.setState(prev => {
      return { [name]: prev[name] + INCRMT };
    });
  };
  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedBack={this.handleButtons}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={this.positivePercentage}
          />
        </Section>
        {/* <Feedback stats={this.state} handleButtons={this.handleButtons} /> */}
      </Container>
    );
  }
}
