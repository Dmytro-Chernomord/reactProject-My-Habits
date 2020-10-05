import axios from 'axios';
import authAction from './authAction';

axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `${token}`);

const clearToken = () => (axios.defaults.headers.common.Authorization = '');
const logIn = userData => dispatch => {
  dispatch(authAction.loginRequest());

  axios
    .post('/auth/login', userData)
    .then(response => {
      // console.log(response);
      setToken(response.data.access_token);
      dispatch(authAction.loginSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
      dispatch(authAction.loginError(error.message));
    });
};

const registration = userData => dispatch => {
  dispatch(authAction.registrationRequest());

  axios
    .post('/auth/registration', userData)
    .then(response => {
      //? autologin? error?
      axios
        .post('/auth/login', userData)
        .then(response => {
          // console.log(response);
          setToken(response.data.access_token);
          dispatch(authAction.loginSuccess(response.data));
        })
        .catch(er => console.log(er));
      dispatch(authAction.registrationSuccess(response.data));
    })
    .catch(error => dispatch(authAction.registrationError(error)));
};

const logOut = () => dispatch => {
  // console.log('Hi');
  clearToken();
  dispatch(authAction.logoutSuccess());
};

export default {
  registration,
  logIn,
  logOut,
  setToken,
};
