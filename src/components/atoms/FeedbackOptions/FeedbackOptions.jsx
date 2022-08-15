import React from 'react';
import PropTypes from 'prop-types';
import { Div, StyledButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ Good, Neutral, Bad, onLeaveFeedback }) => {
  const values = { Good, Neutral, Bad };
  return (
    <Div>
      {Object.keys(values).map(option => (
        <StyledButton
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </StyledButton>
      ))}
    </Div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
