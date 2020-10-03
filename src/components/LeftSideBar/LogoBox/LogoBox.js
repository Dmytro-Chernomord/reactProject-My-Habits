import React from 'react';
import { ReactComponent as Logo } from '../../../images/logo/logo-black.svg';
import styles from './logoBox.module.css';

export default function LogoBox() {
  return (
    <div className={styles.container}>
      <div className={styles.leftLogoSvg}>
        <Logo />
      </div>
    </div>
  );
}
