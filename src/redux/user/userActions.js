import { createAction } from '@reduxjs/toolkit';

const getOwnHabitsRequest = createAction('user/getOwnHabitsRequest');
const getOwnHabitsSuccess = createAction('user/getOwnHabitsSuccess');
const getOwnHabitsError = createAction('user/getOwnHabitsError');

const addHabitRequest = createAction('contacts/addHabitRequest');
const addHabitSuccess = createAction('contacts/addHabitSuccess');
const addHabitError = createAction('contacts/addHabitError');

export default {
  getOwnHabitsRequest,
  getOwnHabitsSuccess,
  getOwnHabitsError,
  addHabitRequest,
  addHabitSuccess,
  addHabitError,
};
