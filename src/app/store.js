import { configureStore } from '@reduxjs/toolkit';
import { QuestionSliceReducer } from '../features/question';

const reducer = {
  question: QuestionSliceReducer,
};

const store = configureStore({
  reducer,
});

export default store;
