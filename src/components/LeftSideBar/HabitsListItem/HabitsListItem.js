import React from 'react';
import styles from './HabitsListItem.module.css';

function HabitsListItem({ text, habitColor }) {
  return (
    <li className={styles.habitsCardsItem}>
      <span style={{ background: habitColor }} className={styles.circle}></span>
      <p className={styles.habitsCardsText}>{text}</p>
    </li>
  );
}

export default HabitsListItem;
