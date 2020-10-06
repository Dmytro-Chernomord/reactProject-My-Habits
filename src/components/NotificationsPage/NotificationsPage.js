import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './notification.module.css';
import habitSelector from '../../redux/habits/habitsSelector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';
import notificationsActions from '../../redux/notifications/notificationsActions';

function Notifications({}) {
  const stateNotification = useSelector(state => state.notifications.count);
  const setNotification = useSelector(
    state => state.notifications.setNotification,
  );
  const dispatch = useDispatch();

  const [isVisibleCompleted, setIsVisibleCompleted] = useState(false);
  const handleClickCompleted = () => {
    setIsVisibleCompleted(true);
    dispatch(notificationsActions.removeNotification());
  };
  const [isVisibleHalfWay, setIsVisibleHalfWay] = useState(false);
  const handleClickHalfWay = () => {
    setIsVisibleHalfWay(true);
    dispatch(notificationsActions.removeNotification());
  };
  const [isVisibleThreeDays, setIsVisibleThreeDays] = useState(false);
  const handleClickThreeDays = () => {
    setIsVisibleThreeDays(true);
    dispatch(notificationsActions.removeNotification());
  };
  const [isVisibleFiveDays, setIsVisibleFiveDays] = useState(false);
  const handleClickFiveDays = () => {
    setIsVisibleFiveDays(true);
    dispatch(notificationsActions.removeNotification());
  };
  const [isVisibleOneDay, setIsVisibleOneDay] = useState(false);
  const handleClickOneDay = () => {
    setIsVisibleOneDay(true);
    dispatch(notificationsActions.removeNotification());
  };
  const [isVisibleReminder, setIsVisibleReminder] = useState(false);
  const handleClickReminder = () => {
    setIsVisibleReminder(true);
    dispatch(notificationsActions.removeNotification());
  };

  const filteredHabitsData = useSelector(state =>
    habitSelector.getFilterTodayHabits(state),
  );
  const habitsData = useSelector(state => state.habits);

  const habits = habitsData.map(el => el.data);

  const activeDays = habits.filter(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );

  const daysLeft = habits.map(el => el.filter(elm => elm === null));
  const youHaveThreeDaysLeft = daysLeft.some(el => el.length === 3);
  const youHaveFiveDaysLeft = daysLeft.some(el => el.length === 5);
  const halfWayTrough = daysLeft.some(el => el.length > 10);

  const presentActiveDays = activeDays.filter(elm => elm.length > 0);

  const uncompletedDays = presentActiveDays.map(el =>
    el.filter(elm => elm === false),
  );
  const youCanDoBetter = uncompletedDays.some(el => el.length > 7);
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const oneDayLeft = daysLeft.some(el => el.length === 1);

  const youGotAchievment = successfullDays.some(el => el.length > 20);

  useEffect(() => {
    if (youGotAchievment && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    if (youCanDoBetter && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    if (youHaveFiveDaysLeft && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    if (youHaveThreeDaysLeft && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    if (oneDayLeft && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    if (halfWayTrough && !setNotification) {
      dispatch(notificationsActions.addNotification());
    }
    return () => {
      //     if (stateNotification === 1) {
      //       dispatch(notificationsActions.removeNotification());
      //     }
    };
  }, [
    dispatch,
    halfWayTrough,
    oneDayLeft,
    setNotification,
    youCanDoBetter,
    youGotAchievment,
    youHaveFiveDaysLeft,
    youHaveThreeDaysLeft,
  ]);

  return (
    <div className={styles.container}>
      <h2>You have {stateNotification} notifications</h2>
      <TransitionGroup>
        {youHaveThreeDaysLeft && !setNotification && !isVisibleThreeDays && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickThreeDays} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 3 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {halfWayTrough && !setNotification && !isVisibleHalfWay && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickHalfWay} className={styles.box}>
              <h2 className={styles.title}>
                Поздравляем! Вы на половине пути!
              </h2>
              <p className={styles.text}>Большая часть позади!</p>
            </div>
          </CSSTransition>
        )}

        {youHaveFiveDaysLeft && !setNotification && !isVisibleFiveDays && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickFiveDays} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 5 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {youCanDoBetter && !setNotification && !isVisibleReminder && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickReminder} className={styles.box}>
              <h2 className={styles.title}>Не сдавайся!</h2>
              <p className={styles.text}>
                Не забывай отмечать свои привычки!У тебя получится!
              </p>
            </div>
          </CSSTransition>
        )}

        {youGotAchievment && !setNotification && !isVisibleCompleted && (
          <CSSTransition classNames="option" timeout={250}>
            <div onClick={handleClickCompleted} className={styles.box}>
              <h2 className={styles.title}>Привычка успешно освоена!</h2>
              <p className={styles.text}>
                Поздравляем! Вы успешно освоили свою привычку
              </p>
            </div>
          </CSSTransition>
        )}

        {oneDayLeft && !setNotification && !isVisibleOneDay && (
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
  );
}

export default Notifications;
