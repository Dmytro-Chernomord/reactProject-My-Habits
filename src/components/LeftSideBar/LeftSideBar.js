import React from 'react';
import { ReactComponent as Logo } from '../../images/logo/logo-black.svg';
import styles from './leftSideBar.module.css';

export default function LeftSideBar({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftLogoSvg}>
        <Logo />
      </div>
      {children}
    </div>
  );
}
