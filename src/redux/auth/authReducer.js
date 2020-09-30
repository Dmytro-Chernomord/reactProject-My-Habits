import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authAction';

const tokenReducer = createReducer(null, {
  // [actions.registrationSuccess]: (_, action) => action.payload.token,
  [actions.loginSuccess]: (_, actions) => {
    console.log(actions.payload.access_token);
    return actions.payload.access_token;
  },
  [actions.logoutSuccess]: (_, __) => null,
});

// const errorReducer = createReducer(null, {
//   [actions.loginError]: (_, action) => action.payload,
//   [actions.logoutError]: (_, action) => action.payload,
//   [actions.registrationError]: (_, action) => action.payload,
//   [actions.logoutSuccess]: () => null,
//   [actions.loginSuccess]: () => null,
//   [actions.registrationSuccess]: () => null,
//   [actions.clearError]: () => null,
// });

export default combineReducers({
  // user: userDataReducer,
  token: tokenReducer,
  // error: errorReducer,
});
