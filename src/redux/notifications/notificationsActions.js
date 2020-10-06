import { createAction } from '@reduxjs/toolkit';

const addNotification = createAction('notification/add');
const removeNotification = createAction('notification/remove');
const setNotification = createAction('notification/set');

export default {
  addNotification,
  removeNotification,
  setNotification,
};
