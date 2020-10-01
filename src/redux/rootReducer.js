import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './user/userActions';
// import { getSelectedDate } from './date/dateActions';
import modalAction from './modal/modalActions';

const userInitialState = {
  firstName: '',
  lastName: '',
  email: '',
  registerData: '',
  avatar: '',
  phone: '',
  id: '',
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
});

const habitsReducer = createReducer([], {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    return actions.payload.habits;
  },
  [actions.addHabitSuccess]: (state, action) => [...state, action.payload],
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
  cigarettePackPrice: 1,
  cigarettePerDay: 1,
  cigarettePerTime: 1,
  smokeYears: 1,
};

const quizReducer = createReducer(quizInitialState, {
  [actions.getOwnHabitsSuccess]: (_, actions) => {
    console.log(actions.payload.user.quizInfo);
    return { ...actions.payload.user.quizInfo };
  },
});
// export default combineReducers({
//   user: RootReducer,
//   habits: habitsReducer,
//   // error: errorReducer,
// });
// function getModal() {
//   const modal = useSelector(state => state.modal)
//   return true;
// }
const modalReducer = createReducer(false, {
  [modalAction.toggleModal]: (state, _) => !state,
  // [actions.getOwnHabitsSuccess]: (state, _) => !state,
  [actions.addHabitSuccess]: (state, _) => !state,
});

export default {
  user: RootReducer,
  habits: habitsReducer,
  cigarettes: cigarettesReducer,
  payments: paymentsReducer,
  quiz: quizReducer,
  modal: modalReducer,
  // error: errorReducer,
};
