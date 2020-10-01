import React from 'react';
import HabitsListItem from '../HabitsListItem/HabitsListItem';

export default function HabitsList({ habits }) {
  return (
    <div>
      <h2>Привычки</h2>
      <ul>
        {habits.map(({ id }) => (
          <HabitsListItem key={id} id={id} />
        ))}
      </ul>
    </div>
  );
}
