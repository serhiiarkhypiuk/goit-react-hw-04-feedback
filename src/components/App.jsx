import React, { useState } from 'react';
import FeedbackOptions from './atoms/FeedbackOptions/FeedbackOptions';
import Statistics from './atoms/Statistics/Statistics';
import Section from './atoms/Section/Section';
import Notification from './atoms/Notification/Notification';
import styled from 'styled-components';

const App = () => {
  const [good, setGoodValue] = useState(0);
  const [neutral, setNeutralValue] = useState(0);
  const [bad, setBadValue] = useState(0);

  function onLeaveFeedback(button) {
    switch (button.target.name) {
      case 'Good':
        setGoodValue(prevState => prevState + 1);
        break;
      case 'Neutral':
        setNeutralValue(prevState => prevState + 1);
        break;
      case 'Bad':
        setBadValue(prevState => prevState + 1);
        break;
      default:
        return;
    }
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

const StyledWrapper = styled.div`
  width: 25vw;
  max-width: 25vw;
  margin: 10vh 25vw;
  padding: 1rem;
  background-color: rgba(255, 243, 243, 0.7);
  border-radius: 15px;
`;

export default App;
