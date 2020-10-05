import { createAction } from '@reduxjs/toolkit';

const setHabitsDataRequest = createAction('habits/setRequest');
const setHabitsDataSuccess = createAction('habits/setSuccess');
const setHabitsDataError = createAction('habits/setError');

const newHabitsArray = createAction('habits/newHabitsArray');

const setHabitsSettingRequest = createAction('habits/settingRequest');
const setHabitsSettingSuccess = createAction('habits/settingSuccess');
const setHabitsSettingError = createAction('habits/settingError');

const removeHabitRequest = createAction('habits/removeRequest');
const removeHabitSuccess = createAction('habits/removeSuccess');
const removeHabitError = createAction('habits/removeError');

export default {
  setHabitsDataRequest,
  setHabitsDataSuccess,
  setHabitsDataError,
  newHabitsArray,
  setHabitsSettingRequest,
  setHabitsSettingSuccess,
  setHabitsSettingError,
  removeHabitRequest,
  removeHabitSuccess,
  removeHabitError,
};
