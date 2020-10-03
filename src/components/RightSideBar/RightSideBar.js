import React from 'react';
import { Scroll } from '../Scroll/Scroll';
import { HabitsList } from './HabitsList/HabitsList';
import { Calendar } from './Сalendar/Calendar';

export const RightSideBar = () => {
  return (
    <>
      <Scroll staticComponent={Calendar} scrolledComponent={HabitsList} />
    </>
  );
};
