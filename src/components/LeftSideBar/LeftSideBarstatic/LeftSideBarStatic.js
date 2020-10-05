import React from 'react';
import LogoBox from '../LogoBox/LogoBox';
import TimeMoney from '../TimeMoney/TimeMoney';
import UserMenu from '../UserMenu/UserMenu';
import NavigationBar from '../NavigationBar/NavigationBar';
import styles from './LeftSideBarStatic.module.css';

const LeftSideBarStatic = ({ match, onLogOut }) => {
  return (
    <div>
      <LogoBox />
      <UserMenu match={match} onLogOut={onLogOut} />
      <TimeMoney />
      <NavigationBar match={match} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Привычки</h2>
        </div>
      </div>
    </div>
  );
};
export default LeftSideBarStatic;
