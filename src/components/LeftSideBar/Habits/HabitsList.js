import HabitsListItem from '../HabitsListItem/HabitsListItem';
import { useSelector } from 'react-redux';
import styles from './habitsList.module.css';
import React from 'react';

export default function HabitsList() {
  const { habits } = useSelector(state => state);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={styles.habitsList}>
          {habits.map(({ _id, name, habitColor }) => (
            <HabitsListItem key={_id} text={name} habitColor={habitColor} />
          ))}
        </ul>
      </div>
    </div>
  );
}
