import React from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions ';
import { Statistic } from './statistic/Statistic';
import { Section } from './mainSection/MainSection';
import { Notification } from './notificationMessage/NotificationMessage';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const [state,setState] = useState( {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // })

  increment = item => {
    this.setState(prev => ({
      [item]: prev[item] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valueArray = Object.values(this.state);
    const sumOfFeedback = valueArray.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return sumOfFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.ceil((this.state.good / total) * 100);
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="">
          <FeedbackOptions incrementAdd={this.increment} state={this.state} />
          {total ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
//
