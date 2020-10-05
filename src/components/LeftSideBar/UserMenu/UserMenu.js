import React from 'react';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userSelector from '../../../redux/user/userSelector';
import AvatarUser from '../../AvatarUser/AvatarUser';
import avatar4 from '../../../images/avatars/avatar4.png';

const UserMenu = ({ onLogOut, match }) => {
  const { user } = useSelector(state => state);
  const state = useSelector(state => state);
  const subscription = userSelector.getSubscription(state);
  return (
    <div className={styles.container}>
      <Link to={`${match.url}/ProfilePage`} className={styles.link}>
        <div className={styles.avatar}>
          <AvatarUser width={'108'} />
        </div>
      </Link>

      <p className={styles.name}>
        {' '}
        {user.firstName} {user.lastName}
      </p>

      <Link className={styles.linkSub} to={`${match.url}/Subscriptions`}>
        {subscription === '' ? (
          <p className={styles.typeSubscription}>Basic</p>
        ) : (
          <p className={styles.typeSubscription}>{subscription}</p>
        )}
      </Link>

      <button className={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
