import { createAction } from '@reduxjs/toolkit';

const setHabitsDataRequest = createAction('habits/setRequest');
const setHabitsDataSuccess = createAction('habits/setSuccess');
const setHabitsDataError = createAction('habits/setError');

const setHabitsSettingRequest = createAction('habits/settingRequest');
const setHabitsSettingSuccess = createAction('habits/settingSuccess');
const setHabitsSettingError = createAction('habits/settingError');

export default {
  setHabitsDataRequest,
  setHabitsDataSuccess,
  setHabitsDataError,
  setHabitsSettingRequest,
  setHabitsSettingSuccess,
  setHabitsSettingError,
};
