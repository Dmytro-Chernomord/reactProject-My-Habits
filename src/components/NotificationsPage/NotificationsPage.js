import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './notification.module.css';
import habitSelector from '../../redux/habits/habitsSelector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';

export default function Notifications() {
  const [count, setCount] = useState(0);

  const [isVisibleCompleted, setIsVisibleCompleted] = useState(false);
  const handleClickCompleted = () => {
    setIsVisibleCompleted(true);
    setCount(count - 1);
  };
  const [isVisibleHalfWay, setIsVisibleHalfWay] = useState(false);
  const handleClickHalfWay = () => {
    setIsVisibleHalfWay(true);
    setCount(count - 1);
  };
  const [isVisibleThreeDays, setIsVisibleThreeDays] = useState(false);
  const handleClickThreeDays = () => {
    setIsVisibleThreeDays(true);
    setCount(count - 1);
  };
  const [isVisibleFiveDays, setIsVisibleFiveDays] = useState(false);
  const handleClickFiveDays = () => {
    setIsVisibleFiveDays(true);
    setCount(count - 1);
  };
  const [isVisibleOneDay, setIsVisibleOneDay] = useState(false);
  const handleClickOneDay = () => {
    setIsVisibleOneDay(true);
    setCount(count - 1);
  };
  const [isVisibleReminder, setIsVisibleReminder] = useState(false);
  const handleClickReminder = () => {
    setIsVisibleReminder(true);
    setCount(count - 1);
  };

  const filteredHabitsData = useSelector(state =>
    habitSelector.getFilterTodayHabits(state),
  );
  const habitsData = useSelector(state => state.habits);

  const habits = habitsData.map(el => el.data);

  const activeDays = habits.filter(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );
  console.log(activeDays);

  const daysLeft = habits.map(el => el.filter(elm => elm === null));
  const youHaveThreeDaysLeft = daysLeft.some(el => el.length === 3);
  const youHaveFiveDaysLeft = daysLeft.some(el => el.length === 5);
  const halfWayTrough = daysLeft.some(el => el.length === 10);

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

  const ref = useRef(count);

  useEffect(() => {
    if (ref.current === count && youGotAchievment) {
      setCount(prevCount => prevCount + 1);
    }
    if (ref.current === count && youCanDoBetter) {
      setCount(prevCount => prevCount + 1);
    }

    if (ref.current === count && halfWayTrough) {
      setCount(prevCount => prevCount + 1);
    }
    if (ref.current === count && oneDayLeft) {
      setCount(prevCount => prevCount + 1);
    }
    if (ref.current === count && youHaveFiveDaysLeft) {
      setCount(prevCount => prevCount + 1);
    }
    if (ref.current === count && youHaveThreeDaysLeft) {
      setCount(prevCount => prevCount + 1);
    }
    return () => {};
  }, [count, halfWayTrough, oneDayLeft, ref, youCanDoBetter, youGotAchievment, youHaveFiveDaysLeft, youHaveThreeDaysLeft]);

  console.log(count);
  console.log(ref);
  // useEffect(() => {
  //   effect

  // }, [input])

  return (
    <div className={styles.container}>
      <h2>You have {count} notifications</h2>
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
          <CSSTransition
            classNames="option"
            timeout={250}
            in={() => setCount(count => count + 1)}
            unmountOnExit
          >
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
