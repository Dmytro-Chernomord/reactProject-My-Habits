import React from 'react';
import styles from './achievments.module.css';
import AchievmentsList from '../../components/AchievmentsList/AchievmentsList';
import Header from '../../components/Header/Header';

export default function Achievments() {
  return (
    <div className={styles.container}>
      <Header title="Достижения" />
      {/* <header className={styles.header}>
        <h2 className={styles.title}>Достижения</h2>
        <p>Счет:2025</p>
      </header> */}
      <AchievmentsList />
    </div>
  );
}
