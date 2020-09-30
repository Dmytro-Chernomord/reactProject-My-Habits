import { createSelector } from '@reduxjs/toolkit';

const getHabits = state => state.user.habits;

export default {
  getHabits,
};
