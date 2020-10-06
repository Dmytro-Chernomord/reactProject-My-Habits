import React, { useEffect } from 'react';
import styles from './UserMenu.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from '../../../Views/PrivateViews/SubscriptionsViews/Subscriptions.module.css';
import userSelector from '../../../redux/user/userSelector';
import AvatarUser from '../../AvatarUser/AvatarUser';
import avatar4 from '../../../images/avatars/avatar4.png';
import operations from '../../../redux/user/userOperation';

const UserMenu = ({ onLogOut, match }) => {
  const { user } = useSelector(state => state);
  const state = useSelector(state => state);
  const subscription = userSelector.getSubscription(state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (subscription === '') {
      dispatch(operations.changeSubscription({ plan: 'Ultra' }));
    }
  }, [dispatch, subscription]);

  const changeColor = () => {
    switch (subscription) {
      case 'Noob':
        return style.Noob;

      case 'Basic':
        return style.Basic;

      case 'Standart':
        return style.Standart;

      case 'Premium':
        return style.Premium;

      case 'Ultra':
        return style.Ultra;

      default:
        return style.styleSubscpt;
    }
  };

  return (
    <div className={styles.container}>
      <Link to={`${match.url}/ProfilePage`} className={styles.link}>
        <div className={styles.avatar}>
          <AvatarUser width={'108'} />
        </div>
      </Link>

      <p className={styles.name}>
        {user.firstName} {user.lastName}
      </p>

      <Link className={styles.linkSub} to={`${match.url}/Subscriptions`}>
        <p className={changeColor()}>{subscription}</p>
      </Link>

      <button className={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
