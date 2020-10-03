import { createAction } from '@reduxjs/toolkit';

const cigarettesAddRequest = createAction('cigarettes/cigarettesAddRequest');
const cigarettesAddSuccess = createAction('cigarettes/cigarettesAddSuccess');
const cigarettesAddError = createAction('cigarettes/cigarettesAddError');

export default {
  cigarettesAddRequest,
  cigarettesAddSuccess,
  cigarettesAddError,
};
