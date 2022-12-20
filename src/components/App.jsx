import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    if (!total) return;
    const { good } = this.state;
    return Math.floor((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);

    return (
      <Section title="Please leave your feedback:">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      </Section>
    );
  }
}
