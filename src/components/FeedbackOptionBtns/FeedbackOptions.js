import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.container}>
      <ButtonGroup
        className={css.btnGroup}
        variant="contained"
        size="large"
        color="primary"
      >
        <Button
          className={css.goodBtn}
          type="button"
          name={options[0]}
          onClick={() => onLeaveFeedback(`${options[0]}`)}
        >
          Good
        </Button>
        <Button
          className={css.neutralBtn}
          type="button"
          name={options[1]}
          onClick={() => onLeaveFeedback(`${options[1]}`)}
        >
          Neutral
        </Button>
        <Button
          className={css.badBtn}
          type="button"
          name={options[2]}
          onClick={() => onLeaveFeedback(`${options[2]}`)}
        >
          Bad
        </Button>
      </ButtonGroup>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
