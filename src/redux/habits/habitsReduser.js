import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import habitsAction from './habitsAction';

const habit = createReducer('', {
  [habitsAction.setHabitsDataSuccess]: (state, action) => console.log(action),
});

export default combineReducers({
  newHabit: habit,
});
