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

const renderAchievment = createReducer(false, {
  [notificationsActions.renderAchievment]: () => true,
});
const renderReminder = createReducer(false, {
  [notificationsActions.renderReminder]: () => true,
});
const renderFiveDays = createReducer(false, {
  [notificationsActions.renderFiveDays]: () => true,
});
const renderThreeDays = createReducer(false, {
  [notificationsActions.renderThreeDays]: () => true,
});
const renderOneDay = createReducer(false, {
  [notificationsActions.renderOneDay]: () => true,
});
const renderHalfWay = createReducer(false, {
  [notificationsActions.renderHalfWay]: () => true,
});

export default combineReducers({
  count,
  setNotification,
  renderAchievment,
  renderReminder,
  renderThreeDays,
  renderFiveDays,
  renderOneDay,
  renderHalfWay,
});
