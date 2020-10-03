import { createSelector } from '@reduxjs/toolkit';

const getUser = state => state.user;
const getHabits = state => state.user.habits;
const getAvatar = state => state.user.avatar;
const getSubscription = state => state.user.subscription;

export default {
  getHabits,
  getUser,
  getAvatar,
  getSubscription,
};
