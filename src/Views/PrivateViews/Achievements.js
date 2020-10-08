import React from 'react';
import styles from './achievments.module.css';
import AchievmentsList from '../../components/AchievmentsList/AchievmentsList';

export default function Achievments() {
  return (
    <div className={styles.container}>
      <AchievmentsList />
    </div>
  );
}
