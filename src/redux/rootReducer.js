// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './user/userActions';
import modalAction from './modal/modalActions';
import authAction from './auth/authAction';
import habitsActions from './habits/habitsAction';
import quizActions from './quiz/quizActions';
import userActions from './user/userActions';

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
  [actions.addUserInfoSuccess]: (state, { payload }) => {
    return {
      ...state,
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

  [authAction.logoutSuccess]: () => userInitialState,
});

const habitsReducer = createReducer([], {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return actions.payload.habits;
  },
  [actions.addHabitSuccess]: (state, action) => [...state, action.payload],
  [habitsActions.removeHabitSuccess]: (state, action) =>
    state.filter(habit => habit._id !== action.payload),
  [authAction.logoutSuccess]: () => [],
  [habitsActions.newHabitsArray]: (state, actions) =>
    state.filter(habit => habit._id !== actions.payload),
  [habitsActions.setHabitsDataSuccess]: (state, action) => {
    console.log(action.payload);
    console.log(state);
    return [...state, action.payload];
  },
});

const cigarettesInitialStates = {
  data: [],
  startedAt: '',
};
const cigarettesReducer = createReducer(cigarettesInitialStates, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return { ...actions.payload.user.cigarettes };
  },
  [authAction.logoutSuccess]: () => cigarettesInitialStates,
});

const paymentsReducer = createReducer([], {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    // console.log(actions.payload.user.payments);
    return actions.payload.user.payments;
  },
  [actions.addCreditCardSuccess]: (state, { payload }) => [
    ...state,
    { ...payload },
  ],
  [authAction.logoutSuccess]: () => [],
});

const quizInitialState = {
  cigarettePackPrice: 0,
  cigarettePerDay: 1,
  cigarettePerTime: 0,
  smokeYears: 0,
};

const quizReducer = createReducer(quizInitialState, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    // console.log(actions.payload.user.quizInfo);
    return { ...actions.payload.user.quizInfo };
  },
  [quizActions.quizAddSuccess]: (_, actions) => actions.payload,

  [authAction.logoutSuccess]: () => quizInitialState,
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
  [quizActions.quizAddError]: () => true,
  [quizActions.quizAddRequest]: () => false,
  [quizActions.quizAddSuccess]: () => false,
  [userActions.addHabitError]: () => true,
  [userActions.addHabitRequest]: () => false,
  [userActions.addHabitSuccess]: () => false,
});

const loadingReducer = createReducer(false, {
  [authAction.loginRequest]: () => true,
  [authAction.loginSuccess]: () => false,
  [authAction.loginError]: () => false,

  [authAction.registrationRequest]: () => true,
  [authAction.registrationSuccess]: () => false,
  [authAction.registrationError]: () => false,

  [authAction.logoutRequest]: () => true,
  [authAction.logoutSuccess]: () => false,
  [authAction.logoutError]: () => false,

  [habitsActions.removeHabitRequest]: () => true,
  [habitsActions.removeHabitSuccess]: () => false,
  [habitsActions.removeHabitError]: () => false,
});

export default {
  user: RootReducer,
  habits: habitsReducer,
  cigarettes: cigarettesReducer,
  payments: paymentsReducer,
  quiz: quizReducer,
  modal: modalReducer,
  error: errorReducer,
  loading: loadingReducer,
};
