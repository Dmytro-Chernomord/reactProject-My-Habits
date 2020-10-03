import React from 'react';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatar4 from '../../../images/avatars/avatar4.png';

const UserMenu = ({ onLogOut, match }) => {
  const { user } = useSelector(state => state);
  return (
    <div className={styles.container}>
      <Link to={`${match.url}/ProfilePage`} className={styles.link}>
        <div className={styles.avatar}>
          <img src={avatar4} alt="avatar" width="100" height="100" />
        </div>
      </Link>
      <p className={styles.name}>
        {' '}
        {user.firstName} {user.lastName}
      </p>
      <button className={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
