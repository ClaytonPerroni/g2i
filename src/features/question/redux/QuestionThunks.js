/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';

const fetchQuestions = ({ amount, difficulty, questionType }) =>
  axios.get(
    `${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=${questionType}&encode=url3986`
  );

export const validateRequest = response => {
  if (!response?.data) throw new Error('no data attribute in api request');

  const { data } = response;

  // if resp code is good, send to fulfilled thunk
  if (data?.response_code === 0) {
    return response.data;
    // if resp code isn't 0 throw error to go to rejected thunk
  } else {
    throw Error(`response code is not 0, it was ${data?.response_code}`);
  }
};

const handleAPICall = async questionType => {
  const response = await fetchQuestions({
    amount: 10,
    difficulty: 'hard',
    questionType,
  });
  return validateRequest(response);
};

const fetchTrueOrFalse = createAsyncThunk(
  'questions/fetchTrueOrFalse',
  questionType => handleAPICall(questionType)
);

export default fetchTrueOrFalse;
