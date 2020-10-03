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
    await axios.post('/auth/updatePassword', { ...data });
  } catch (error) {
    console.log(error.message);
  }
};
const changeSubscription = data => async dispatch => {
  dispatch(actions.addUserSubscriptionRequest());

  try {
    await axios.post('/users/updateSubscription', {
      ...data,
    });
    dispatch(actions.addUserSubscriptionSuccess(data));
  } catch (error) {
    dispatch(actions.addUserSubscriptionError(error.message));
  }
};
const addCreditCard = data => async dispatch => {
  dispatch(actions.addCreditCardRequest());

  try {
    await axios.post('/users/addPayment', {
      ...data,
    });
    dispatch(actions.addCreditCardSuccess(data));
  } catch (error) {
    dispatch(actions.addCreditCardError(error.message));
  }
};

export default {
  getOwnHabits,
  addHabit,
  addUserInfo,
  changePassword,
  changeSubscription,
  addCreditCard,
};
