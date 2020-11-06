import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './notification.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';
import notificationsActions from '../../redux/notifications/notificationsActions';

function Notifications() {
  const stateNotification = useSelector(state => state.notifications.count);
  const renderAchievment = useSelector(
    state => state.notifications.renderAchievment,
  );
  const renderFiveDays = useSelector(
    state => state.notifications.renderFiveDays,
  );
  const renderThreeDays = useSelector(
    state => state.notifications.renderThreeDays,
  );
  const renderOneDay = useSelector(state => state.notifications.renderOneDay);
  const renderReminder = useSelector(
    state => state.notifications.renderReminder,
  );
  const renderHalfWay = useSelector(state => state.notifications.renderHalfWay);
  const setNotification = useSelector(
    state => state.notifications.setNotification,
  );

  const dispatch = useDispatch();

  const handleClickCompleted = () => {
    dispatch(notificationsActions.renderAchievment());
    dispatch(notificationsActions.removeNotification());
  };
  const handleClickHalfWay = () => {
    dispatch(notificationsActions.renderHalfWay());
    dispatch(notificationsActions.removeNotification());
  };

  const handleClickThreeDays = () => {
    dispatch(notificationsActions.renderThreeDays());
    dispatch(notificationsActions.removeNotification());
  };

  const handleClickFiveDays = () => {
    dispatch(notificationsActions.renderFiveDays());
    dispatch(notificationsActions.removeNotification());
  };

  const handleClickOneDay = () => {
    dispatch(notificationsActions.renderOneDay());
    dispatch(notificationsActions.removeNotification());
  };
  // const [isVisibleReminder, setIsVisibleReminder] = useState(false);
  const handleClickReminder = () => {
    dispatch(notificationsActions.renderReminder());
    dispatch(notificationsActions.removeNotification());
  };

  // const filteredHabitsData = useSelector(state =>
  //   habitSelector.getFilterTodayHabits(state),
  // );
  const habitsData = useSelector(state => state.habits);

  const habits = habitsData.map(el => el.data);

  const activeDays = habits.filter(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );

  const daysLeft = habits.map(el => el.filter(elm => elm === null));
  const youHaveThreeDaysLeft = daysLeft.some(el => el.length === 3);
  const youHaveFiveDaysLeft = daysLeft.some(el => el.length === 5);
  const halfWayTrough = daysLeft.some(el => el.length > 1);

  const presentActiveDays = activeDays.filter(elm => elm.length > 0);

  const uncompletedDays = presentActiveDays.map(el =>
    el.filter(elm => elm === false),
  );
  const youCanDoBetter = uncompletedDays.some(el => el.length > 0);
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const oneDayLeft = daysLeft.some(el => el.length === 1);

  const youGotAchievment = successfullDays.some(el => el.length > 20);

  useEffect(() => {
    if (youGotAchievment && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (youCanDoBetter && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (youHaveFiveDaysLeft && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (
      youHaveThreeDaysLeft &&
      !setNotification &&
      stateNotification === null
    ) {
      dispatch(notificationsActions.addNotification());
    }
    if (oneDayLeft && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (halfWayTrough && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    return () => {};
  }, [
    dispatch,
    halfWayTrough,
    oneDayLeft,
    setNotification,
    stateNotification,
    youCanDoBetter,
    youGotAchievment,
    youHaveFiveDaysLeft,
    youHaveThreeDaysLeft,
  ]);

  useEffect(() => {
    if (stateNotification === 0) {
      dispatch(notificationsActions.setNotification());
    }

    return () => {};
  }, [dispatch, stateNotification]);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>Уведомления</h2>
        <p
          className={
            stateNotification > 0
              ? styles.notifications
              : styles.notificationsEmpty
          }
        >
          {' '}
          {stateNotification} новых{' '}
        </p>
      </header>
      <div className={styles.container}>
        <TransitionGroup>
          {youHaveThreeDaysLeft && !setNotification && !renderThreeDays && (
            <CSSTransition classNames="option" timeout={250} unmountOnExit>
              <div onClick={handleClickThreeDays} className={styles.box}>
                <h2 className={styles.title}>Осталось совсем немного!</h2>
                <p className={styles.text}>
                  Осталось 3 дня чтобы завершить привычку!
                </p>
              </div>
            </CSSTransition>
          )}

          {halfWayTrough && !setNotification && !renderHalfWay && (
            <CSSTransition classNames="option" timeout={250} unmountOnExit>
              <div onClick={handleClickHalfWay} className={styles.box}>
                <h2 className={styles.title}>
                  Поздравляем! Вы на половине пути!
                </h2>
                <p className={styles.text}>Большая часть позади!</p>
              </div>
            </CSSTransition>
          )}

          {youHaveFiveDaysLeft && !setNotification && !renderFiveDays && (
            <CSSTransition classNames="option" timeout={250} unmountOnExit>
              <div onClick={handleClickFiveDays} className={styles.box}>
                <h2 className={styles.title}>Осталось совсем немного!</h2>
                <p className={styles.text}>
                  Осталось 5 дня чтобы завершить привычку!
                </p>
              </div>
            </CSSTransition>
          )}

          {youCanDoBetter && !setNotification && !renderReminder && (
            <CSSTransition classNames="option" timeout={250} unmountOnExit>
              <div onClick={handleClickReminder} className={styles.box}>
                <h2 className={styles.title}>Не сдавайся!</h2>
                <p className={styles.text}>
                  Не забывай отмечать свои привычки!У тебя получится!
                </p>
              </div>
            </CSSTransition>
          )}

          {youGotAchievment && !setNotification && !renderAchievment && (
            <CSSTransition classNames="option" timeout={250}>
              <div onClick={handleClickCompleted} className={styles.box}>
                <h2 className={styles.title}>Привычка успешно освоена!</h2>
                <p className={styles.text}>
                  Поздравляем! Вы успешно освоили свою привычку
                </p>
              </div>
            </CSSTransition>
          )}

          {oneDayLeft && !setNotification && !renderOneDay && (
            <CSSTransition classNames="option" timeout={250} unmountOnExit>
              <div onClick={handleClickOneDay} className={styles.box}>
                <h2 className={styles.title}>Ура!!! Остался один день.</h2>
                <p className={styles.text}>
                  Остался один день чтобы завершить привычку!
                </p>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Notifications;
