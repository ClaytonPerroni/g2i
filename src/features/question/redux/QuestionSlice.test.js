import QuestionSliceReducer, {
  incrementCurrentQuestion,
  resetQuestions,
  answerQuestion,
} from './QuestionSlice';

test('should return the initial state', () => {
  expect(QuestionSliceReducer(undefined, {})).toEqual({
    questions: [],
    currentQuestion: 0,
    fetchError: false,
    loading: false,
    questionsLoaded: false,
  });
});

test('should handle incrementing question index', () => {
  // const previousState = {};
  expect(QuestionSliceReducer(undefined, incrementCurrentQuestion())).toEqual({
    questions: [],
    currentQuestion: 1,
    fetchError: false,
    loading: false,
    questionsLoaded: false,
  });
});

test('should handle reseting questions', () => {
  const previousState = {
    questions: [
      {
        question: 'qqweqwe',
        type: 'boolean',
        difficulty: 'hard',
        correct_answer: 'true',
        wrong_answers: ['false'],
      },
    ],
    currentQuestion: 1,
    fetchError: false,
    loading: false,
    questionsLoaded: false,
  };
  expect(QuestionSliceReducer(previousState, resetQuestions())).toEqual({
    questions: [],
    currentQuestion: 0,
    fetchError: false,
    loading: false,
    questionsLoaded: false,
  });
});

test('should handle answering a question', () => {
  const previousState = {
    questions: [
      {
        question: 'qqweqwe',
        type: 'boolean',
        difficulty: 'hard',
        correct_answer: 'true',
        wrong_answers: ['false'],
      },
    ],
    currentQuestion: 0,
  };
  expect(
    QuestionSliceReducer(previousState, answerQuestion({ answer: 'true' }))
  ).toEqual({
    questions: [
      {
        question: 'qqweqwe',
        type: 'boolean',
        difficulty: 'hard',
        correct_answer: 'true',
        wrong_answers: ['false'],
        user_answer: 'true',
      },
    ],
    currentQuestion: 0,
  });
});
