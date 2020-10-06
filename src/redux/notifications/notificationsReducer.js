import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import notificationsActions from './notificationsActions';

const count = createReducer(null, {
  [notificationsActions.addNotification]: state => state + 1,
  [notificationsActions.removeNotification]: state => state - 1,
});
const setNotification = createReducer(false, {
  [notificationsActions.setNotification]: () => true,
  //   [notificationsActions.removeNotification]: () => true,
});

// const renderNotification = createReducer(true, {
//   [notificationsActions.removeNotification]: () => false,
// });
export default combineReducers({
  count,
  setNotification,
  //   renderNotification
});
