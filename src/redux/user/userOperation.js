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

export default { getOwnHabits };
