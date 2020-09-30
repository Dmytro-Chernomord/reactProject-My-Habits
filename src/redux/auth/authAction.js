import { createAction } from '@reduxjs/toolkit';

const registrationRequest = createAction('auth/registrationRequest');
const registrationSuccess = createAction('auth/registrationSuccess');
// const registrationError = createAction('auth/registrationError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
// const loginError = createAction('auth/loginError');

// const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
// const logoutError = createAction('auth/logoutError');

// const clearError = createAction('error/clear');

export default {
  registrationRequest,
  registrationSuccess,
  // registrationError,
  loginRequest,
  loginSuccess,
  // loginError,
  //   logoutRequest,
  logoutSuccess,
  //   logoutError,
  //   clearError,
};
