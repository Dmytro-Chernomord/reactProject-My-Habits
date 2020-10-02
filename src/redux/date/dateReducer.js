import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getSelectedDate, getCurrentDate } from './dateActions';
import authActions from '../auth/authAction';

const today = new Date();

const selectedDate = createReducer(today.toISOString(), {
  [getSelectedDate]: (_, { type, payload }) => payload,
  [authActions.logoutSuccess]: () => '',
});
const currentDate = createReducer(today.toISOString(), {
  [getCurrentDate]: (_, { type, payload }) => payload,
  [authActions.logoutSuccess]: () => '',
});
export default combineReducers({ selectedDate, currentDate });
