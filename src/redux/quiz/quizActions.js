import { createAction } from '@reduxjs/toolkit';

const quizAddRequest = createAction('quiz/quizAddRequest');
const quizAddSuccess = createAction('quiz/quizAddSuccess');
const quizAddError = createAction('quiz/quizAddError');

export default {
  quizAddRequest,
  quizAddSuccess,
  quizAddError,
};
