import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Cup } from '../../../images/menu-icons/cup.svg';
import { ReactComponent as Bell } from '../../../images/menu-icons/bell.svg';
import { ReactComponent as Calendar } from '../../../images/menu-icons/calendar.svg';
import styles from './NavigationBar.module.css';

const Navigation = ({ match }) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.linkBox}>
          <NavLink
            className={styles.iconBox}
            activeStyle={{
              backgroundColor: '#333333',
            }}
            isActive={(_, location) => {
              if (location.pathname === `${match.url}`) {
                return true;
              }
            }}
            to={`${match.url}`}
          >
            <Calendar />
          </NavLink>
        </li>
        <li className={styles.linkBox}>
          <NavLink
            className={styles.iconBox}
            activeStyle={{
              backgroundColor: '#333333',
            }}
            isActive={(_, location) => {
              if (location.pathname === `${match.url}/Achievments`) {
                return true;
              }
            }}
            to={`${match.url}/Achievments`}
          >
            <Cup />
          </NavLink>
        </li>
        <li className={styles.linkBox}>
          <NavLink
            className={styles.iconBox}
            activeStyle={{
              backgroundColor: '#333333',
            }}
            isActive={(_, location) => {
              if (location.pathname === `${match.url}/Notifications`) {
                return true;
              }
            }}
            to={`${match.url}/Notifications`}
          >
            <Bell />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
