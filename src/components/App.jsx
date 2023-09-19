import React, { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions ';
import { Statistic } from './statistic/Statistic';
import { Section } from './mainSection/MainSection';
import { Notification } from './notificationMessage/NotificationMessage';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increment = item => {
    setState(prev => ({ ...prev, [item]: prev[item] + 1 }));
  };

  const countTotalFeedback = () => {
    const valueArray = Object.values(state);
    const sumOfFeedback = valueArray.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return sumOfFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positivePercentage = Math.ceil((state.good / total) * 100);
    return positivePercentage;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="">
        <FeedbackOptions incrementAdd={increment} state={state} />
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
};
