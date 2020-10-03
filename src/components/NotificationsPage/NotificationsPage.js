import React from 'react';
import { useSelector } from 'react-redux';
import styles from './notification.module.css';
// import habitSelector from '../../redux/habits/habitsSelector';

export default function Notifications() {
  // const filteredHabitsData = useSelector(state =>
  //   habitSelector.getFilterTodayHabits(state),
  // );
  // console.log(filteredHabitsData);
  const habitsData = useSelector(state => state.habits);
  // console.log(habitsData);
  const habits = habitsData.map(el => el.data);
  const activeDays = habits.map(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );
  const presentActiveDays = activeDays.filter(elm => elm.length > 0);

  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  // const youGotFirstAchievment = successfullDays.some(el => el.length === 1);
  const youGotAchievment = successfullDays.some(el => el.length > 1);

  return (
    <div className={styles.container}>
      {/* {youGotFirstAchievment && (
        <div className={styles.box}>
          <h2 classname={styles.title}>Привычка успешно завершена</h2>
          <p className={styles.text}>
            Поздравляем! Вы успешно завершили свою первую привычку
          </p>
        </div>
      )} */}

      {youGotAchievment && (
        <div className={styles.box}>
          <h2 className={styles.title}>Привычка успешно завершена</h2>
          <p className={styles.text}>
            Поздравляем! Вы успешно завершили свою привычку
          </p>
        </div>
      )}
    </div>
  );
}
