import axios from 'axios';
import actions from './userActions';

const getOwnHabits = userData => dispatch => {
  dispatch(actions.getOwnHabitsRequest());

  axios
    .get('/habits')
    .then(response => {
      //set token
      dispatch(actions.getOwnHabitsSuccess(response.data));
    })
    .catch(er => dispatch(actions.getOwnHabitsError(er)));
  // .catch(er => console.log(er));
};

const addHabit = habit => async dispatch => {
  dispatch(actions.addHabitRequest());

  try {
    const response = await axios.post(
      'https://make-it-habit-api.herokuapp.com/habits',
      { ...habit },
    );
    console.log(response.data);
    dispatch(actions.addHabitSuccess(response.data));
  } catch (error) {
    dispatch(actions.addHabitError(error.message));
  }
};

export default { getOwnHabits, addHabit };
