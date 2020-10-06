//created by Elena
import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import habitsSelector from '../../../redux/habits/habitsSelector';
import HabitsListItem from '../HabitsListItem/HabitsListItem';
import sortByTime from '../../../helpers/sortByTime';
import slideStyles from './slide.module.css';
import styles from './HabitsList.module.css';

export function HabitsList() {
  const habits = useSelector(state => habitsSelector.getFilterHabits(state));

  const sortedHabits = sortByTime(habits);

  return (
    <TransitionGroup component="ul" className={styles.List}>
      {sortedHabits.map(habit => (
        <CSSTransition
          in={sortedHabits.length > 0}
          key={habit._id}
          timeout={250}
          classNames={slideStyles}
          unmountOnExit
        >
          <HabitsListItem
            key={habit._id}
            habit={habit}
            completed={habit.completed}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
