import { element } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../Views/PrivateViews/achievments.module.css';
import cigarettesSelectors from '../../redux/cigarettes/cigarettesSelector';

const AchievmentsList = function () {
  const cigarettesData = useSelector(state => state.cigarettes.data);
  const quizCigarettesData = useSelector(state => state.quiz.cigarettePerDay);
  const daysWhenSmoke = cigarettesData.filter(item => typeof item === 'number');
  const daysDontSmoke = cigarettesData.filter(
    item => typeof item === 'boolean',
  );
  const fiveCigarettesLess = daysWhenSmoke.some(
    el => quizCigarettesData - el > 4,
  );
  const oneCigaretteLess = daysWhenSmoke.some(
    el => quizCigarettesData - el >= 1,
  );
  const threeCigarettesLess = daysWhenSmoke.some(
    el => quizCigarettesData - el >= 3,
  );

  console.log(daysDontSmoke.length > 0);
  return (
    <ul className={styles.list}>
      <li
        className={daysDontSmoke.length > 0 ? styles.item_success : styles.item}
      >
        <p className={styles.text}>Отказ от одной сигареты</p>
      </li>
      <li
        className={
          daysDontSmoke.length > 0 || threeCigarettesLess
            ? styles.item_success
            : styles.item
        }
      >
        <p className={styles.text}>Отказ от 3 сигарет</p>
      </li>
      <li
        className={
          daysDontSmoke.length > 0 || fiveCigarettesLess
            ? styles.item_success
            : styles.item
        }
      >
        <p className={styles.text}>Отказ от 5 сигарет</p>
      </li>
      <li
        className={daysDontSmoke.length > 0 ? styles.item_success : styles.item}
      >
        <p className={styles.text}>Не курю 1 день</p>
      </li>
      <li
        className={daysDontSmoke.length > 2 ? styles.item_success : styles.item}
      >
        <p className={styles.text}>Не курю 3 дня</p>
      </li>
      <li
        className={daysDontSmoke.length > 4 ? styles.item_success : styles.item}
      >
        <p className={styles.text}>Не курю одну неделю</p>
      </li>
    </ul>
  );
};

export default AchievmentsList;
