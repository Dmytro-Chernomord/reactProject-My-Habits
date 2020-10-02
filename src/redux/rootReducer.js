import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './user/userActions';
import modalAction from './modal/modalActions';
import authAction from './auth/authAction';
import habitsActions from './habits/habitsAction';

const userInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  registerData: '',
  avatar: '',
  phone: '',
  id: '',
  subscription: '',
};

const RootReducer = createReducer(userInitialState, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return {
      avatar: actions.payload.user.avatar,
      email: actions.payload.user.email,
      firstName: actions.payload.user.firstName,
      lastName: actions.payload.user.lastName,
      registerData: actions.payload.user.registerData,
      phone: actions.payload.user.phone,
      id: actions.payload.user.id,
      subscription: actions.payload.user.subscription,
    };
  },
  [actions.addUserInfoSuccess]: (_, { payload }) => {
    return {
      avatar: payload.avatar,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      phone: payload.phone,
    };
  },
  [actions.addUserSubscriptionSuccess]: (state, { payload }) => ({
    ...state,
    subscription: payload.plan,
  }),

  // [authAction.logoutSuccess]: (_, action) => console.log('action'),
});

const habitsReducer = createReducer([], {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return actions.payload.habits;
  },
  [actions.addHabitSuccess]: (state, action) => [...state, action.payload],
  [habitsActions.removeHabitSuccess]: (state, action) =>
    state.filter(habit => habit._id !== action.payload),
});

const cigarettesInitialStates = {
  data: [],
  startedAt: '',
};
const cigarettesReducer = createReducer(cigarettesInitialStates, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return { ...actions.payload.user.cigarettes };
  },
});

const paymentsReducer = createReducer([], {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    console.log(actions.payload.user.payments);
    return actions.payload.user.payments;
  },
});

const quizInitialState = {
  cigarettePackPrice: 0,
  cigarettePerDay: 0,
  cigarettePerTime: 0,
  smokeYears: 0,
};

const quizReducer = createReducer(quizInitialState, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    console.log(actions.payload.user.quizInfo);
    return { ...actions.payload.user.quizInfo };
  },
});

const modalReducer = createReducer(false, {
  [modalAction.toggleModal]: (state, _) => !state,
  // [actions.getOwnHabitsSuccess]: (state, _) => !state,
  [actions.addHabitSuccess]: (state, _) => !state,
});

const errorReducer = createReducer(null, {
  [authAction.registrationError]: () => true,
  [authAction.registrationRequest]: () => false,
  [authAction.registrationSuccess]: () => false,
  [authAction.loginError]: () => true,
  [authAction.loginRequest]: () => false,
  [authAction.loginSuccess]: () => false,
});

export default {
  user: RootReducer,
  habits: habitsReducer,
  cigarettes: cigarettesReducer,
  payments: paymentsReducer,
  quiz: quizReducer,
  modal: modalReducer,
  error: errorReducer,
};
