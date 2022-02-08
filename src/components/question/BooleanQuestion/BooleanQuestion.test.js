import React from 'react';
import { render, screen, waitFor, fireEvent } from 'testUtils/testUtils';
import { BooleanQuestion } from '.';

test('renders buttons', () => {
  render(<BooleanQuestion index={0} answerQuestion={() => {}} />);
  const trueButton = screen.getByText(/TRUE/i);
  expect(trueButton).toBeInTheDocument();
  const falseButton = screen.getByText(/FALSE/i);
  expect(falseButton).toBeInTheDocument();
});

test('buttons fire onClick', async () => {
  const answerQuestion = jest.fn();
  render(<BooleanQuestion index={0} answerQuestion={answerQuestion} />);
  fireEvent.click(screen.getByTestId('question0_falseButton'));
  await waitFor(() => {
    expect(answerQuestion).toHaveBeenCalledTimes(1);
  });
});
