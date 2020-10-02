import React from 'react';
import { HabitsList } from './HabitsList/HabitsList';
import { Calendar } from './Сalendar/Calendar';

export const RightSideBar = () => {
  return (
    <>
      <Calendar />
      <HabitsList />
    </>
  );
};
