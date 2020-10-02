import React from 'react';
import styles from './UserMenu.module.css';
import { Route, Link } from 'react-router-dom';
import TempBut from '../../TempBut';

const UserMenu = ({ name, onLogout, match }) => (
  <div className={styles.container}>
    <img className={styles.avatar} src="#" alt="user avatar" />
    <Link to={`${match.url}/ProfilePage`}>ProfilePage</Link>
    <span className={styles.name}> {name}</span>
    <TempBut type="button" onClick={onLogout}>
      Logout
    </TempBut>
  </div>
);

export default UserMenu;
