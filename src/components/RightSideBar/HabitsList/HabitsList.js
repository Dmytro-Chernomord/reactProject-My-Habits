import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import getHabits from '../../../redux/user/userSelector';
import HabitsListItem from '../HabitsListItem/HabitsListItem';
import slideStyles from './slide.module.css';
import styles from './HabitsList.module.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const data = [
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export function HabitsList() {
  const habits = useSelector(state => state.habits);
  const tasks = [true, false, false, true, true, false, false];

  console.log('habits', habits);

  return (
    <TransitionGroup component="ul" className={styles.List}>
      {habits.map(habit => (
        <CSSTransition
          in={habits.length > 0}
          key={habit._id}
          timeout={250}
          classNames={slideStyles}
          unmountOnExit
        >
          <HabitsListItem
            key={habit._id}
            habit={habit}
            completed={getRandomInt(2)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

// "allday" > Ежедневно
// workday">Пн-Вт-Ср-Чт-Пт
// weekend">Сб-Вс
// "firstset" > Пн - Ср - Пт
// secondset">ВТ-ЧТ-СБ
