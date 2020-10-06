// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './user/userActions';
import modalAction from './modal/modalActions';
import authAction from './auth/authAction';
import habitsActions from './habits/habitsAction';
import quizActions from './quiz/quizActions';
import userActions from './user/userActions';
import generateColor from '../helpers/generateHabitsColor';
import cigarettesActions from './cigarettes/cigarettesActions';

const upData = (state, { payload }) =>
  state.map(el => (el._id === payload._id ? (el = { ...el, ...payload }) : el));

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
    const coloredArrHabits = actions.payload.habits.map(habit => ({
      ...habit,
      habitColor: generateColor(),
    }));
    return coloredArrHabits;
  },

  [actions.addHabitSuccess]: (state, action) => [
    ...state,
    { ...action.payload, habitColor: generateColor() },
  ],
  [habitsActions.removeHabitSuccess]: (state, action) =>
    state.filter(habit => habit._id !== action.payload),
  [authAction.logoutSuccess]: () => [],
  [habitsActions.newHabitsArray]: (state, actions) =>
    state.filter(habit => habit._id !== actions.payload),
  [habitsActions.setHabitsDataSuccess]: upData,
});

const cigarettesInitialStates = {
  data: [],
  startedAt: '',
  missedDates: [],
};
const cigarettesReducer = createReducer(cigarettesInitialStates, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return { ...actions.payload.user.cigarettes };
  },
  [cigarettesActions.cigarettesAddSuccess]: (state, actions) => {
    return { ...state, data: [...actions.payload] };
  },
  [cigarettesActions.setMissedDates]: (state, actions) => {
    return { ...state, missedDates: [...actions.payload] };
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
  [userActions.addUserInfoError]: () => true,
  [userActions.addUserInfoRequest]: () => false,
  [userActions.addUserInfoSuccess]: () => false,
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

  [habitsActions.setHabitsDataRequest]: () => true,
  [habitsActions.setHabitsDataSuccess]: () => false,
  [habitsActions.setHabitsDataError]: () => false,

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
