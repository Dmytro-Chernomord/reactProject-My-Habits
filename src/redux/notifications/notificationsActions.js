import { createAction } from '@reduxjs/toolkit';

const addNotification = createAction('notification/add');
const removeNotification = createAction('notification/remove');

export default {
  addNotification,
  removeNotification,
};
