import { useState } from 'react';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = ['good', 'neutral', 'bad'];
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? `${Math.round((good * 100) / totalFeedback).toFixed()} %`
    : '0 %';

  const onLeaveFeedback = event => {
    const feedback = event.target.value;
    if (feedback === 'good') setGood(prevGood => prevGood + 1);
    if (feedback === 'neutral') setNeutral(prevNeutral => prevNeutral + 1);
    if (feedback === 'bad') setBad(prevBad => prevBad + 1);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Container>
  );
};

export default App;
