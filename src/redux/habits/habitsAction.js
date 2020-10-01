import { createAction } from '@reduxjs/toolkit';

const setHabitsDataRequest = createAction('habits/setRequest');
const setHabitsDataSuccess = createAction('habits/setSuccess');
const setHabitsDataError = createAction('habits/setError');

export default {
  setHabitsDataRequest,
  setHabitsDataSuccess,
  setHabitsDataError,
};
