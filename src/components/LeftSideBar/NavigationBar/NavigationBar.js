import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import styles from './NavigationBar.module.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          activeStyle={styles}
          className={styles}
          to={routes.checklist}
          exact
        >
          checklist
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={styles}
          className={styles}
          to={routes.achievements}
          exact
        >
          achievements
        </NavLink>
      </li>
      <li>
        <NavLink
          activeStyle={styles}
          className={styles}
          to={routes.notification}
          exact
        >
          notification
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
