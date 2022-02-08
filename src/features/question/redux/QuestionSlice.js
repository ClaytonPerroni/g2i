/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { recursiveDecode } from 'features/uriDecoder';
import fetchTrueOrFalse from './QuestionThunks';

export const QuestionSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [],
    currentQuestion: 0,
    fetchError: false,
    loading: false,
    questionsLoaded: false,
  },
  reducers: {
    incrementCurrentQuestion: state => {
      state.currentQuestion += 1;
    },
    resetQuestions: state => {
      state.questions = [];
      state.currentQuestion = 0;
      state.questionsLoaded = false;
    },
    answerQuestion: (state, action) => {
      state.questions[state.currentQuestion] = {
        ...state.questions[state.currentQuestion],
        user_answer: action.payload.answer,
      };
    },
  },
  extraReducers: {
    [fetchTrueOrFalse.pending]: state => {
      state.loading = true;
    },
    [fetchTrueOrFalse.fulfilled]: (state, action) => {
      state.loading = false;
      state.questionsLoaded = true;
      const { results } = action.payload;

      const questions = recursiveDecode(results);

      state.questions = questions;
    },
    [fetchTrueOrFalse.rejected]: state => {
      state.loading = false;
      state.fetchError = true;
    },
  },
});

export const { incrementCurrentQuestion, resetQuestions, answerQuestion } =
  QuestionSlice.actions;

export const selectQuestions = state => state.question.questions;

export const selectCurrentQuestion = state =>
  state.question.questions[state.question.currentQuestion];
export const selectCurrentQuestionIndex = state =>
  state.question.currentQuestion;
export const selectNumberOfQuestions = state => state.question.questions.length;
export const selectFetchError = state => state.question.fetchError;
export const selectQuestionsLoaded = state => state.question.questionsLoaded;

export default QuestionSlice.reducer;

// Thunks
export { fetchTrueOrFalse };
