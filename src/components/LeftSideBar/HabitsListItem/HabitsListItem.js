import React from 'react';
import styles from './HabitsListItem.module.css';

function HabitsListItem({ text }) {
  return (
    <li className={styles.habitsCardsItem}>
      <p className={styles.habitsCardsText}>{text}</p>
    </li>
  );
}

export default HabitsListItem;
