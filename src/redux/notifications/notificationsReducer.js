import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import notificationsActions from './notificationsActions';

const count = createReducer(0, {
  [notificationsActions.addNotification]: state => state + 1,
  [notificationsActions.removeNotification]: state => state - 1,
});
const setNotification = createReducer(false, {
  [notificationsActions.removeNotification]: () => true,
});
export default combineReducers({
  count,
  setNotification,
});
