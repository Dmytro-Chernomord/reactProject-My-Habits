import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const getCigarettesData = state => state.cigarettes;
const getQuizCigarettesData = state => state.quiz.cigarettePerDay;
export default {
  getCigarettesData,
  getQuizCigarettesData,
};
