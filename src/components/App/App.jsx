import { Component } from 'react';
import { Container } from './App.styled.js';
import Feedback from '../Feedback';

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

  render() {
    return (
      <Container>
        <Feedback stats={this.state} handleButtons={this.handleButtons} />
      </Container>
    );
  }
}
