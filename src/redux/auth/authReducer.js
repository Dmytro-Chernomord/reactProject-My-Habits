import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './authAction';

const tokenReducer = createReducer(null, {
  // [actions.registrationSuccess]: (_, action) => action.payload.token,
  [actions.loginSuccess]: (_, actions) => {
    return actions.payload.access_token;
  },
  [actions.logoutSuccess]: (_, __) => null,
});

export default combineReducers({
  token: tokenReducer,
});
