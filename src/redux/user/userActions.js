import { createAction } from '@reduxjs/toolkit';

const getOwnHabitsRequest = createAction('user/getOwnHabitsRequest');
const getOwnHabitsSuccess = createAction('user/getOwnHabitsSuccess');
const getOwnHabitsError = createAction('user/getOwnHabitsError');

const addHabitRequest = createAction('habits/addHabitRequest');
const addHabitSuccess = createAction('habits/addHabitSuccess');
const addHabitError = createAction('habits/addHabitError');

const addUserInfoRequest = createAction('contacts/addUserInfoRequest');
const addUserInfoSuccess = createAction('contacts/addUserInfoSuccess');
const addUserInfoError = createAction('contacts/addUserInfoError');
const addUserSubscriptionRequest = createAction(
  'subscription/addUserSubscriptionRequest',
);
const addUserSubscriptionSuccess = createAction(
  'subscription/addUserSubscriptionSuccess',
);
const addUserSubscriptionError = createAction(
  'subscription/addUserSubscriptionError',
);

const addCreditCardRequest = createAction('creditcard/addCreditCardRequest');

const addCreditCardSuccess = createAction('creditcard/addCreditCardSuccess');

const addCreditCardError = createAction('creditcard/addCreditCardError');
export default {
  getOwnHabitsRequest,
  getOwnHabitsSuccess,
  getOwnHabitsError,
  addHabitRequest,
  addHabitSuccess,
  addHabitError,
  addUserInfoRequest,
  addUserInfoSuccess,
  addUserInfoError,
  addUserSubscriptionRequest,
  addUserSubscriptionSuccess,
  addUserSubscriptionError,
  addCreditCardRequest,
  addCreditCardSuccess,
  addCreditCardError,
};
