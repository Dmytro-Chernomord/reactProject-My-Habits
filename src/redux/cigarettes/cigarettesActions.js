import { createAction } from '@reduxjs/toolkit';

const cigarettesAddRequest = createAction('cigarettes/cigarettesAddRequest');
const cigarettesAddSuccess = createAction('cigarettes/cigarettesAddSuccess');
const cigarettesAddError = createAction('cigarettes/cigarettesAddError');

const setMissedDates = createAction('cigarettes/setMissedDates');

export default {
  cigarettesAddRequest,
  cigarettesAddSuccess,
  cigarettesAddError,
  setMissedDates,
};
