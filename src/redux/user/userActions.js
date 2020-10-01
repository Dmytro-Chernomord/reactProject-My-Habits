import { createAction } from '@reduxjs/toolkit';

const getOwnHabitsRequest = createAction('user/getOwnHabitsRequest');
const getOwnHabitsSuccess = createAction('user/getOwnHabitsSuccess');
const getOwnHabitsError = createAction('user/getOwnHabitsError');

const addHabitRequest = createAction('habits/addHabitRequest');
const addHabitSuccess = createAction('habits/addHabitSuccess');
const addHabitError = createAction('habits/addHabitError');

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
