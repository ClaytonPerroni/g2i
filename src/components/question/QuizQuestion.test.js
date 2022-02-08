import React from 'react';
import { render, screen } from 'testUtils/testUtils';
import QuizQuestion from './QuizQuestion';

test('renders buttons', () => {
  render(
    <QuizQuestion
      index={0}
      question={{
        question: 'qqweqwe',
        type: 'boolean',
        difficulty: 'hard',
        correct_answer: 'true',
        wrong_answers: ['false'],
      }}
    />
  );
  const trueButton = screen.getByText(/TRUE/i);
  expect(trueButton).toBeInTheDocument();
  const falseButton = screen.getByText(/FALSE/i);
  expect(falseButton).toBeInTheDocument();
});
