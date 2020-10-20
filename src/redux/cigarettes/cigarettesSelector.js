// import { createSelector } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

const getCigarettesData = state => state.cigarettes;
const getCigarettesDataStartedAt = state => state.cigarettes.startedAt;
const getCigarettesArray = state => state.cigarettes.data;

const getQuizCigarettesData = state => state.quiz.cigarettePerDay;

const getMissedDatesArray = state => state.cigarettes.missedDates;

export default {
  getCigarettesData,
  getQuizCigarettesData,
  getCigarettesDataStartedAt,
  getCigarettesArray,
  getMissedDatesArray,
};
