import { createAction } from '@reduxjs/toolkit';

const getSelectedDate = createAction('date/selectedDate');
const getCurrentDate = createAction('date/currentDate');
export { getSelectedDate, getCurrentDate };
