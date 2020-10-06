import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Cup } from '../../../images/menu-icons/cup.svg';
import { ReactComponent as Bell } from '../../../images/menu-icons/bell.svg';
import { ReactComponent as Calendar } from '../../../images/menu-icons/calendar.svg';
import notificationsActions from '../../../redux/notifications/notificationsActions';
// import calendar from '../../../images/menu-icons/calendar.svg';
import styles from './NavigationBar.module.css';

const Navigation = ({ match, notifications }) => {
  // console.log(match);
  return (
    <nav className={styles.container}>
      <ul className={styles.navList}>
        <li className={styles.linkBox}>
          <Link className={styles.iconBox} to={`${match.url}`}>
            <Calendar />
          </Link>
        </li>
        <li className={styles.linkBox}>
          <Link className={styles.iconBox} to={`${match.url}/Achievments`}>
            <Cup />
          </Link>
        </li>
        <li className={styles.linkBox}>
          <p
            className={
              notifications > 0
                ? styles.notifications
                : styles.notificationsHidden
            }
          >
            {notifications}
          </p>
          <Link className={styles.iconBox} to={`${match.url}/Notifications`}>
            <Bell />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToPops = state => ({
  notifications: state.notifications,
});
const mapDispatchToProps = dispatch => ({
  onAddNotification: value =>
    dispatch(notificationsActions.addNotification(value)),
  onRemoveNotification: value =>
    dispatch(notificationsActions.removeNotification(value)),
});

export default connect(mapStateToPops, mapDispatchToProps)(Navigation);
