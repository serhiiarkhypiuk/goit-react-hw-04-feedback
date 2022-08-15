import React, { useState } from 'react';
import FeedbackOptions from './atoms/FeedbackOptions/FeedbackOptions';
import Statistics from './atoms/Statistics/Statistics';
import Section from './atoms/Section/Section';
import Notification from './atoms/Notification/Notification';
import { StyledWrapper } from './atoms/FeedbackOptions/FeedbackOptions.styled';

const App = () => {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);

  function onLeaveFeedback(button) {
    if (button.target.name === 'Good') setGoodValue(prevState => prevState + 1);
    if (button.target.name === 'Neutral')
      setNeutralValue(prevState => prevState + 1);
    if (button.target.name === 'Bad') setBadValue(prevState => prevState + 1);
  }

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <>
      <StyledWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </StyledWrapper>
    </>
  );
};

export default App;
