import { createReducer } from '@reduxjs/toolkit';
import notificationsActions from './notificationsActions';

export default createReducer(0, {
  [notificationsActions.addNotification]: state => state + 1,
  [notificationsActions.removeNotification]: state => state - 1,
});
