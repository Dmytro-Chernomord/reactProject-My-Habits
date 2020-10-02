import React from 'react';
import { useSelector } from 'react-redux';
import styles from './notification.module.css';
export default function Notifications() {
  const habitsData = useSelector(state => state.habits);
  const habits = habitsData.map(el => el.data);
  const activeDays = habits.map(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );
  const presentActiveDays = activeDays.filter(elm => elm.length > 0);
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const youGotFirstAchievment = successfullDays.some(el => el.length === 1);
  const youGotAchievment = successfullDays.some(el => el.length > 2);

  return (
    <div className={styles.container}>
      {youGotFirstAchievment && (
        <div className={styles.box}>
          <h2 classname={styles.title}>Привычка успешно завершена</h2>
          <p className={styles.text}>
            Поздравляем! Вы успешно завершили свою первую привычку
          </p>
        </div>
      )}

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
