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
    dispatch(actions.addHabitSuccess(response.data));
  } catch (error) {
    dispatch(actions.addHabitError(error.message));
  }
};

const addUserInfo = dataUser => async dispatch => {
  dispatch(actions.addUserInfoRequest());

  try {
    const response = await axios.patch('/users', { ...dataUser });
    dispatch(actions.addUserInfoSuccess(response.data));
  } catch (error) {
    dispatch(actions.addUserInfoError(error.message));
  }
};

const changePassword = data => async dispatch => {
  try {
    const response = await axios.post('/auth/updatePassword', { ...data });
    console.log('Password', response);
  } catch (error) {
    console.log(error);
    // dispatch(actions.addUserInfoError(error.message));
  }
};
export default { getOwnHabits, addHabit, addUserInfo, changePassword };
