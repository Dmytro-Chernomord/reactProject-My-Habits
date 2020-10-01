import React from 'react';
import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <img className={styles.avatar} src="#" alt="user avatar" />
    <span className={styles.name}> {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

export default UserMenu;
