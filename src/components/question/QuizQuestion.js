import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { answerQuestion, incrementCurrentQuestion } from 'features/question';
import { BooleanQuestion } from './BooleanQuestion';

function QuizQuestion({ question, index }) {
  const dispatch = useDispatch();

  const answerQuestionFunc = answer => {
    dispatch(answerQuestion({ answer }));
    dispatch(incrementCurrentQuestion());
  };

  switch (question.type) {
    case 'boolean':
      return (
        <BooleanQuestion index={index} answerQuestion={answerQuestionFunc} />
      );
    default:
      throw new Error('unhandled question type provided to <QuizQuestion>');
  }
}

QuizQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    difficulty: PropTypes.string,
    type: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answer: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default QuizQuestion;
