import React from 'react';
import styles from './leftSideBar.module.css';

export default function LeftSideBar({ children }) {
  return (
    <div className={styles.container}>
      <h2>My habits logo</h2>
      {children}
    </div>
  );
}
