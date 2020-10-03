import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Money } from '../../../images/svg-icons/trash-grey.svg';
import { ReactComponent as Time } from '../../../images/svg-icons/trash-grey.svg';
import styles from './TimeMoney.module.css';

function TimeMoney() {
  const { quiz } = useSelector(state => state);
  return (
    <ul className={styles.container}>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленные деньги</p>
        <div className={styles.dataView}>
          <Time />
          <span className={styles.numbers}>{quiz.cigarettePackPrice}</span>
        </div>
      </li>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленное время</p>
        <div className={styles.dataView}>
          <Money />
          <span className={styles.numbers}>{quiz.cigarettePerTime}</span>
        </div>
      </li>
    </ul>
  );
}

export default TimeMoney;
