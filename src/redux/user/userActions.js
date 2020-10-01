import { createAction } from '@reduxjs/toolkit';

const getOwnHabitsRequest = createAction('user/getOwnHabitsRequest');
const getOwnHabitsSuccess = createAction('user/getOwnHabitsSuccess');
const getOwnHabitsError = createAction('user/getOwnHabitsError');

const addHabitRequest = createAction('contacts/addHabitRequest');
const addHabitSuccess = createAction('contacts/addHabitSuccess');
const addHabitError = createAction('contacts/addHabitError');

const addUserInfoRequest = createAction('contacts/addUserInfoRequest');
const addUserInfoSuccess = createAction('contacts/addUserInfoSuccess');
const addUserInfoError = createAction('contacts/addUserInfoError');

export default {
  getOwnHabitsRequest,
  getOwnHabitsSuccess,
  getOwnHabitsError,
  addHabitRequest,
  addHabitSuccess,
  addHabitError,
  addUserInfoRequest,
  addUserInfoSuccess,
  addUserInfoError,
};
