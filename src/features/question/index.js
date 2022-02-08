import QuestionSliceReducer, {
  incrementCurrentQuestion,
  resetQuestions,
  answerQuestion,
  selectQuestions,
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectNumberOfQuestions,
  selectFetchError,
  selectQuestionsLoaded,
  fetchTrueOrFalse,
} from './redux/QuestionSlice';
import scoreQuiz from './scoring/scoring';

export { fetchTrueOrFalse };

export {
  scoreQuiz,
  incrementCurrentQuestion,
  resetQuestions,
  answerQuestion,
  selectQuestions,
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectNumberOfQuestions,
  selectFetchError,
  selectQuestionsLoaded,
  QuestionSliceReducer,
};
