import React, { useState, useRef, useEffect } from 'react';
import { useSelector, connect } from 'react-redux';
import styles from './notification.module.css';
import habitSelector from '../../redux/habits/habitsSelector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';
import notificationsActions from '../../redux/notifications/notificationsActions';

function Notifications({
  onAddNotification,
  notifications,
  onRemoveNotification,
}) {
  const [isVisibleCompleted, setIsVisibleCompleted] = useState(false);
  const handleClickCompleted = () => {
    setIsVisibleCompleted(true);
    onRemoveNotification();
  };
  const [isVisibleHalfWay, setIsVisibleHalfWay] = useState(false);
  const handleClickHalfWay = () => {
    setIsVisibleHalfWay(true);
    onRemoveNotification();
  };
  const [isVisibleThreeDays, setIsVisibleThreeDays] = useState(false);
  const handleClickThreeDays = () => {
    setIsVisibleThreeDays(true);
    onRemoveNotification();
  };
  const [isVisibleFiveDays, setIsVisibleFiveDays] = useState(false);
  const handleClickFiveDays = () => {
    setIsVisibleFiveDays(true);
    onRemoveNotification();
  };
  const [isVisibleOneDay, setIsVisibleOneDay] = useState(false);
  const handleClickOneDay = () => {
    setIsVisibleOneDay(true);
    onRemoveNotification();
  };
  const [isVisibleReminder, setIsVisibleReminder] = useState(false);
  const handleClickReminder = () => {
    setIsVisibleReminder(true);
    onRemoveNotification();
  };
  const stateNotification = useSelector(state => state.notifications);
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
  const youCanDoBetter = uncompletedDays.some(el => el.length > 0);
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const oneDayLeft = daysLeft.some(el => el.length === 1);

  const youGotAchievment = successfullDays.some(el => el.length > 20);

  const ref = useRef(notifications);

  useEffect(() => {
    if (ref.current === notifications && youGotAchievment) {
      onAddNotification();
    }
    if (ref.current === notifications && youCanDoBetter) {
      onAddNotification();
    }
    if (ref.current === notifications && youHaveFiveDaysLeft) {
      onAddNotification();
    }
    if (ref.current === notifications && youHaveThreeDaysLeft) {
      onAddNotification();
    }
    if (ref.current === notifications && oneDayLeft) {
      onAddNotification();
    }
    if (ref.current === notifications && halfWayTrough) {
      onAddNotification();
    }
    return () => {
      if (notifications === 1) {
        onRemoveNotification();
      }
    };
  }, [
    ref,
    youGotAchievment,
    youCanDoBetter,
    notifications,
    youHaveFiveDaysLeft,
    youHaveThreeDaysLeft,
    oneDayLeft,
    halfWayTrough,
    onAddNotification,
    onRemoveNotification,
  ]);

  return (
    <div className={styles.container}>
      <h2>You have {stateNotification} notifications</h2>
      <TransitionGroup>
        {youHaveThreeDaysLeft && !isVisibleThreeDays && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickThreeDays} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 3 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {halfWayTrough && !isVisibleHalfWay && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickHalfWay} className={styles.box}>
              <h2 className={styles.title}>
                Поздравляем! Вы на половине пути!
              </h2>
              <p className={styles.text}>Большая часть позади!</p>
            </div>
          </CSSTransition>
        )}

        {youHaveFiveDaysLeft && !isVisibleFiveDays && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickFiveDays} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 5 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {youCanDoBetter && !isVisibleReminder && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClickReminder} className={styles.box}>
              <h2 className={styles.title}>Не сдавайся!</h2>
              <p className={styles.text}>
                Не забывай отмечать свои привычки!У тебя получится!
              </p>
            </div>
          </CSSTransition>
        )}

        {youGotAchievment && !isVisibleCompleted && (
          <CSSTransition classNames="option" timeout={250}>
            <div onClick={handleClickCompleted} className={styles.box}>
              <h2 className={styles.title}>Привычка успешно освоена!</h2>
              <p className={styles.text}>
                Поздравляем! Вы успешно освоили свою привычку
              </p>
            </div>
          </CSSTransition>
        )}

        {oneDayLeft && !isVisibleOneDay && (
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

//  <div className={styles.container}>
//       <TransitionGroup component="ul">
//         {activeDays.map(el => (
//           <CSSTransition
//             classNames="option"
//             timeout={250}
//             key={el._id}
//             unmountOnExit
//           >
//             <li className>
//               {el.length === 0 &&
//                 isVisible &&
//                 ((
//                   <div onClick={handleClick} className={styles.box}>
//                     <h2 className={styles.title}>Привычка успешно освоена!</h2>

//                     <p className={styles.text}>
//                       Поздравляем! Вы успешно освоили свою привычку
//                     </p>
//                   </div>
//                 ) ||
//                   (el.length === 10 && (
//                     <div onClick={handleClick} className={styles.box}>
//                       <h2 className={styles.title}>
//                         Поздравляем! Вы на половине пути!
//                       </h2>
//                       <p className={styles.text}>Большая часть позади!</p>
//                     </div>
//                   )) ||
//                   (el.length === 18 && (
//                     <div onClick={handleClick} className={styles.box}>
//                       <h2 className={styles.title}>Осталось совсем немного!</h2>

//                       <p className={styles.text}>
//                         Осталось 3 дня чтобы завершить привычку!
//                       </p>
//                     </div>
//                   )) ||
//                   (el.length === 16 && isVisible && (
//                     <div onClick={handleClick} className={styles.box}>
//                       <h2 className={styles.title}>Осталось совсем немного!</h2>

//                       <p className={styles.text}>
//                         // Осталось 5 дня чтобы завершить привычку!
//                       </p>
//                     </div>
//                   )))}
//             </li>
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </div>

const mapStateToPops = state => ({
  // notifications: state.notifications,
});
const mapDispatchToProps = dispatch => ({
  onAddNotification: value =>
    dispatch(notificationsActions.addNotification(value)),
  onRemoveNotification: value =>
    dispatch(notificationsActions.removeNotification(value)),
});

export default connect(mapStateToPops, mapDispatchToProps)(Notifications);
