import { onFilterHabits } from '../../helpers/onFilterHabits';

const getAllHabits = state => state.habits;

const getFilterHabits = state => {
  const dateForFilter = state.date.selectedDate.slice(0, 10);
  const habits = state.habits;
  return onFilterHabits(dateForFilter, habits);
};

const getFilterTodayHabits = state => {
  const dateForFilter = state.date.currentDate.slice(0, 10);
  const habits = state.habits;
  return onFilterHabits(dateForFilter, habits);
};

export default { getAllHabits, getFilterHabits, getFilterTodayHabits };
