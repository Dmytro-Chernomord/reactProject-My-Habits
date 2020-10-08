import axios from 'axios';
import habitsAction from './habitsAction';

const setHabitsDataDay = (item, key, index) => async dispatch => {
  const newData = [];
  for (let i = 0; i < 21; i++) {
    newData[i] = i === index ? key : item.data[i];
  }

  dispatch(habitsAction.setHabitsDataRequest());
  const response = await axios.patch(`/habits`, {
    id: item._id,
    name: item.name,
    data: newData,
  });
  try {
    dispatch(habitsAction.setHabitsDataSuccess(response.data.updatedHabit));
  } catch (err) {
    dispatch(habitsAction.setHabitsDataError(err));
  }
};

const setHabitsData = (items, date) => dispatch => {
  // const date = useSelector(state => state.data.currentDate);
  const nowDate = date.slice(0, 10);
  items.forEach(item => {
    const index = item.habitsDates.findIndex(el => el === nowDate);
    const newData = [];
    for (let i = 0; i < 21; i++) {
      newData[i] = null;
    }
    for (let i = 0; i < index; i++) {
      item.data[i] === null
        ? (newData[i] = false)
        : (newData[i] = item.data[i]);
    }
    newData[index] = item.data[index];

    dispatch(habitsAction.setHabitsDataRequest());
    axios
      .patch(`/habits`, { id: item._id, name: item.name, data: newData })
      .then(res => {
        // dispatch(habitsAction.newHabitsArray(res.data.updatedHabit._id));
        dispatch(habitsAction.setHabitsDataSuccess(res.data.updatedHabit));
      })
      .catch(err => dispatch(habitsAction.setHabitsDataError(err)));
  });
  // const nowDate = date.slice(0, 10);
  // const index = item.habitsDates.findIndex(el => el === nowDate);
  // const newData = [];
  // for (let i = 0; i < 21; i++) {
  //   newData[i] = null;
  // }
  // for (let i = 0; i < index; i++) {
  //   item.data[i] === null ? (newData[i] = false) : (newData[i] = item.data[i]);
  // }

  // dispatch(habitsAction.setHabitsDataRequest());
  // axios
  //   .patch(`/habits`, { id: item._id, name: item.name, data: newData })
  //   .then(res => {
  //     dispatch(habitsAction.newHabitsArray(res.data.updatedHabit._id));
  //     dispatch(habitsAction.setHabitsDataSuccess(res.data.updatedHabit));
  //   })
  //   .catch(err => dispatch(habitsAction.setHabitsDataError(err)));
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

const updateHabit = data => async dispatch => {
  dispatch(habitsAction.setHabitsDataRequest());
  try {
    await axios.patch('/habits', data).then(res => {
      dispatch(habitsAction.setHabitsDataSuccess(res.data.updatedHabit));
    });
  } catch (error) {
    console.log('aus operation', error.message);
  }
};

export default { setHabitsDataDay, setHabitsData, removeHabit, updateHabit };
