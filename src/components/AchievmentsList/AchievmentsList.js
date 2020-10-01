import React from 'react';
import styles from '../../Views/PrivateViews/achievments.module.css';

const AchievmentsList = function () {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.text}>Отказ от одной сигареты</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Отказ от 3 сигарет</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Отказ от 5 сигарет</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Не курю 1 день</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Не курю 3 дня</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Не курю одну неделю</p>
      </li>
    </ul>
  );
};

export default AchievmentsList;
