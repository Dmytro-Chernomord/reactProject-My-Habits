import React from 'react';
import HabitsListItem from '../HabitsListItem/HabitsListItem';

export default function HabitsList({ habits }) {
  const habitsArr = habits.habits;
  return (
    <div>
      <h2>Привычки</h2>
      <ul>
        {habitsArr.map(({ id, text }) => (
          <HabitsListItem key={id} id={id} text={text} />
        ))}
      </ul>
    </div>
  );
}
