import React from 'react';
// import PropTypes from 'prop-types';
import styles from './HabitsListItem.module.css';

function HabitsListItem({ text }) {
  return (
    <li className={styles.habitsCards}>
      <p className={styles.habitsCardsItems}>{text}</p>
    </li>
  );
}

export default HabitsListItem;
