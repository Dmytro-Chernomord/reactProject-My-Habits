import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './notification.module.css';
import habitSelector from '../../redux/habits/habitsSelector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';
import notificationsActions from '../../redux/notifications/notificationsActions';

function Notifications({
  oneDayLeft,

  setNotification,
  youHaveThreeDaysLeft,
  halfWayTrough,
  youHaveFiveDaysLeft,
  youCanDoBetter,
  youGotAchievment,
}) {
  console.log('youGotAchievment', oneDayLeft);

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

  const handleClickReminder = () => {
    dispatch(notificationsActions.renderReminder());
    dispatch(notificationsActions.removeNotification());
  };

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
