import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TimeMoney.module.css';

function TimeMoney() {
  return (
    <ul>
      <li className={styles}>
        <p className={styles}>Сэкономленные деньги</p>
        <span>money</span>
      </li>
      <li className={styles}>
        <p className={styles}>Сэкономленное время</p>
        <span>time</span>
      </li>
    </ul>
  );
}

export default TimeMoney;
