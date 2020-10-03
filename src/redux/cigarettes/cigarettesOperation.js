import axios from 'axios';
import authAction from './authAction';

const postDayCigarettes = userData => dispatch => {
  dispatch(authAction.postDayCigarettesRequest());

  axios
    .post('/auth/login', userData)
    .then(response => {
      // console.log(response);

      dispatch(authAction.loginSuccess(response.data));
    })
    .catch(error => dispatch(authAction.loginError(error.message)));
};

export default {
  postDayCigarettes,
};
