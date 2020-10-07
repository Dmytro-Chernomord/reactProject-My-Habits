import { createAction } from '@reduxjs/toolkit';

const addNotification = createAction('notification/add');
const removeNotification = createAction('notification/remove');
const setNotification = createAction('notification/set');
const renderAchievment = createAction('notification/renderAchievment');
const renderReminder = createAction('notification/renderReminder');
const renderFiveDays = createAction('notification/renderFiveDays');
const renderThreeDays = createAction('notification/renderThreeDays');
const renderOneDay = createAction('notification/renderOneDay');
const renderHalfWay = createAction('notification/renderHalfway');
export default {
  addNotification,
  removeNotification,
  setNotification,
  renderAchievment,
  renderThreeDays,
  renderReminder,
  renderFiveDays,
  renderOneDay,
  renderHalfWay,
};
