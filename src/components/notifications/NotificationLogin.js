import React from 'react';
import styles from './NotificationLogin.module.css';
import { ReactComponent as Close } from '../../images/svg-icons/close-red.svg';

const NotificationLogin = ({ text, onClickClose }) => {
  return (
    <div className={styles.box}>
      <button type="button" onClick={onClickClose} className={styles.btnClose}>
        <Close width="15" height="15" />
      </button>

      <div className={styles.boxError}>
        <p className={styles.error}>{text}</p>
      </div>
    </div>
  );
};

export default NotificationLogin;
