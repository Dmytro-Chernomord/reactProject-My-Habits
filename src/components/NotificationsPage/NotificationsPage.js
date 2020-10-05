import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './notification.module.css';
import habitSelector from '../../redux/habits/habitsSelector';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './transition.css';

export default function Notifications() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(true);
  };
  const filteredHabitsData = useSelector(state =>
    habitSelector.getFilterTodayHabits(state),
  );

  const habitsData = useSelector(state => state.habits);

  const habits = habitsData.map(el => el.data);

  const activeDays = habits.map(el =>
    el.filter(elm => typeof elm !== 'boolean'),
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
  const youCanDoBetter = uncompletedDays.map(el => el.length > 2);
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const oneDayLeft = daysLeft.some(el => el.length === 1);

  const youGotAchievment = successfullDays.some(el => el.length > 20);

  return (
    <div className={styles.container}>
      <TransitionGroup>
        {youHaveThreeDaysLeft && !isVisible && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 3 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {halfWayTrough && !isVisible && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
              <h2 className={styles.title}>
                Поздравляем! Вы на половине пути!
              </h2>
              <p className={styles.text}>Большая часть позади!</p>
            </div>
          </CSSTransition>
        )}

        {youHaveFiveDaysLeft && !isVisible && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
              <h2 className={styles.title}>Осталось совсем немного!</h2>
              <p className={styles.text}>
                Осталось 5 дня чтобы завершить привычку!
              </p>
            </div>
          </CSSTransition>
        )}

        {!isVisible && youCanDoBetter && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
              <h2 className={styles.title}>Не сдавайся!</h2>
              <p className={styles.text}>
                Не забывай отмечать свои привычки!У тебя получится!
              </p>
            </div>
          </CSSTransition>
        )}

        {youGotAchievment && !isVisible && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
              <h2 className={styles.title}>Привычка успешно освоена!</h2>
              <p className={styles.text}>
                Поздравляем! Вы успешно освоили свою привычку
              </p>
            </div>
          </CSSTransition>
        )}

        {oneDayLeft && !isVisible && (
          <CSSTransition classNames="option" timeout={250} unmountOnExit>
            <div onClick={handleClick} className={styles.box}>
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
