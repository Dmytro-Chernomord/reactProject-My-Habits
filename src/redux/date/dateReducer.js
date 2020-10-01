import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getSelectedDate, getCurrentDate } from './dateActions';

const today = new Date();

const selectedDate = createReducer(today.toISOString(), {
  [getSelectedDate]: (_, { type, payload }) => payload,
});
const currentDate = createReducer(today.toISOString(), {
  [getCurrentDate]: (_, { type, payload }) => payload,
});
export default combineReducers({ selectedDate, currentDate });
