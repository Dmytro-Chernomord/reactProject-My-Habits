// import { element } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../../Views/PrivateViews/achievments.module.css';

const AchievmentsList = function () {
  const time = useSelector(state => state.notifications.saverTime);
  const cigarettesData = useSelector(state => state.cigarettes.data);
  const quizCigarettesData = useSelector(state => state.quiz.cigarettePerDay);
  const daysWhenSmoke = cigarettesData.filter(item => typeof item === 'number');
  const daysDontSmoke = cigarettesData.filter(item => item === 0);
  console.log(daysDontSmoke);
  const fiveCigarettesLess = daysWhenSmoke.some(
    el => quizCigarettesData - el > 4,
  );
  const oneCigaretteLess = daysWhenSmoke.some(
    el => quizCigarettesData - el >= 1,
  );
  const threeCigarettesLess = daysWhenSmoke.some(
    el => quizCigarettesData - el > 2,
  );
  console.log(cigarettesData);
  // console.log(daysDontSmoke.length > 0);
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Достижения</h2>
      </header>
      <ul className={styles.list}>
        <li
          className={
            daysDontSmoke.length > 0 || oneCigaretteLess
              ? styles.item_success
              : styles.item
          }
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
          className={
            daysDontSmoke.length > 0 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 1 день</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 2 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 3 дня</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 6 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю одну неделю</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 13 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 2 недели</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 30 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 1 месяц</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 90 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 3 месяца</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 189 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 6 месяцев</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 364 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Не курю 1 год</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 365 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>+1 год без сигарет</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 365 * 3 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>3 года без сигарет</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 365 * 5 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Уже 5. Дай пять!</p>
        </li>
        <li
          className={
            daysDontSmoke.length > 365 * 7 ? styles.item_success : styles.item
          }
        >
          <p className={styles.text}>Вперед к мечте!</p>
        </li>
        <li className={time >= 1 ? styles.item_success : styles.item}>
          <p className={styles.text}>Сохранил 1 час</p>
        </li>
        <li className={time >= 3 ? styles.item_success : styles.item}>
          <p className={styles.text}>Сохранил 3 часа</p>
        </li>
        <li className={time >= 5 ? styles.item_success : styles.item}>
          <p className={styles.text}>Сохранил 5 часов</p>
        </li>
      </ul>
    </div>
  );
};

export default AchievmentsList;
