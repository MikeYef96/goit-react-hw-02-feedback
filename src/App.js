import React, { Component } from 'react';
import { SectionTitle } from './components/SectionTitleFolder/SectionTitle';
import { Statistics } from './components/statistics/Statistics';
import { Notification } from './components/notification/Notification';
import { FeedbackOptions } from './components/FeedbackOptionBtns/FeedbackOptions';
import PropTypes from 'prop-types';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  clickHandler = evt => {
    const btn = evt;
    this.setState(prevState => {
      return { [btn]: prevState[btn] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keyName = Object.keys(this.state);

    return (
      <div className={css.container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={keyName}
            onLeaveFeedback={this.clickHandler}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given yet" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}
