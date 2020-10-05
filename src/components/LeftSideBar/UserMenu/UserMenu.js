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
  const RegisterDate = useSelector(userSelector.getRegisterDate);
  const dispatch = useDispatch();

  let UserDateRegiste = new Date(RegisterDate);
  const normalDate = Date.parse(UserDateRegiste);
  const TimeLoop = Date.now() - normalDate;

  const sevenDays = 653440000;

  useEffect(() => {
    if (TimeLoop < sevenDays && subscription !== 'Ultra') {
      dispatch(operations.changeSubscription({ plan: 'Ultra' }));
    }
  }, [TimeLoop, dispatch, subscription]);

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
        {' '}
        {user.firstName} {user.lastName}
      </p>

      <Link className={styles.linkSub} to={`${match.url}/Subscriptions`}>
        {/* {subscription === '' ? (
          <p className={styles.typeSubscription}>Basic</p>
        ) : ( */}
        <p className={changeColor()}>{subscription}</p>
        {/* )} */}
      </Link>

      <button className={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
