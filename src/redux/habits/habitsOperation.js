import axios from 'axios';
import habitsAction from './habitsAction';

const setHabitsData = (item, date) => dispatch => {
  const nowDate = date.slice(0, 10);
  const index = item.habitsDates.findIndex(el => el === nowDate);
  // console.log(index);
  const newData = [];
  for (let i = 0; i < 21; i++) {
    newData[i] = null;
  }
  for (let i = 0; i < index; i++) {
    item.data[i] === null ? (newData[i] = false) : (newData[i] = item.data[i]);
  }

  dispatch(habitsAction.setHabitsDataRequest());
  axios
    .patch(`/habits`, { id: item._id, name: item.name, data: newData })
    .then(res => {
      dispatch(habitsAction.setHabitsDataSuccess(res.data));
    })
    // .then(userOperation.getOwnHabits)
    .then(console.log)
    .catch(err => dispatch(habitsAction.setHabitsDataError(err)));
  // userOperation.getOwnHabits();
};

const removeHabit = id => dispatch => {
  dispatch(habitsAction.removeHabitRequest());
  axios
    .delete(`/habits/${id}`)
    .then(() => {
      dispatch(habitsAction.removeHabitSuccess(id));
    })
    .catch(err => dispatch(habitsAction.removeHabitError(err)));
};

export default { setHabitsData, removeHabit };
