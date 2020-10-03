import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import habitsOperation from '../../../redux/habits/habitsOperation';
import { ButtonRemove } from '../../UIcomponents/ButtonRemove/ButtonRemove';
import styles from './HabitsListItem.module.css';

function HabitsListItem({ habit, completed }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(habitsOperation.removeHabit(habit._id));
    setIsLoading(true);
  };

  const time = habit.planningTime.slice(11, 16);

  return (
    <li className={styles.ListItem}>
      <div className={styles.TimeBox}>
        {completed ? (
          <div className={styles.CheckedBox} />
        ) : (
          <span className={styles.Time}> {time}</span>
        )}
      </div>

      <span className={completed ? styles.Through : styles.Text}>
        {habit.name}
      </span>
      <ButtonRemove
        type="button"
        id={habit._id}
        handelClick={handleClick}
        isLoading={isLoading}
      />
    </li>
  );
}

export default HabitsListItem;
