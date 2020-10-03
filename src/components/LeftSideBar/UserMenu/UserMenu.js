import React from 'react';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatar4 from '../../../images/avatars/avatar4.png';
import TempBut from '../../TempBut';

const UserMenu = ({ onLogOut, match }) => {
  const { user } = useSelector(state => state);
  return (
    <div className={styles.container}>
      <Link to={`${match.url}/ProfilePage`}>
        <div className={styles.avatar}>
          <img src={avatar4} alt="avatar" width="100" height="100" />
        </div>
      </Link>
      <p className={styles.name}>
        {' '}
        {user.firstName} {user.lastName}
      </p>
      <TempBut type="button" onClick={onLogOut}>
        Logout
      </TempBut>
    </div>
  );
};

export default UserMenu;
