import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Hourglass } from '../../../images/svg-icons/hourglass.svg';
import { ReactComponent as Wallet } from '../../../images/svg-icons/wallet.svg';
import styles from './TimeMoney.module.css';
import actionNotification from '../../../redux/notifications/notificationsActions';

function TimeMoney() {
  const { quiz } = useSelector(state => state);
  const state = useSelector(state => state);

  const dispatch = useDispatch();
  function cigMoneyPerDay(cigPackPrice, cigPerDay) {
    const cigPerPack = 20; /* захардкодил т.к. данные не приходят */
    const cigPrice = cigPackPrice / cigPerPack;
    const result = cigPrice * cigPerDay;
    return result;
  }

  function cigTimePerDay(cigTimePrice, cigPerDay) {
    const result = cigTimePrice * cigPerDay;
    return result;
  }

  const getFiltredCig = cigArr => {
    return cigArr.filter(cigArrItem => cigArrItem);
  };

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + ' ч ' + rminutes + ' мин ';
  }

  const filtredArr = getFiltredCig(state.cigarettes.data);

  const moneyEconomy = filtredArr => {
    const sumOfEconomyMoney = filtredArr.reduce((acc, arrItem) => {
      const staticCigMoney = cigMoneyPerDay(
        quiz.cigarettePackPrice,
        quiz.cigarettePerDay,
      );
      const dynamicCigMoney = cigMoneyPerDay(quiz.cigarettePackPrice, arrItem);
      const result = staticCigMoney - dynamicCigMoney;
      return acc + result;
    }, 0);
    return Math.round(sumOfEconomyMoney * 100) / 100;
  };

  const timeEconomy = filtredArr => {
    const sumOfEconomyTime = filtredArr.reduce((acc, arrItem) => {
      const staticCigTime = cigTimePerDay(
        quiz.cigarettePerTime,
        quiz.cigarettePerDay,
      );
      const dynamicCigTime = cigTimePerDay(quiz.cigarettePerTime, arrItem);
      const result = staticCigTime - dynamicCigTime;
      return acc + result;
    }, 0);
    return timeConvert(sumOfEconomyTime);
  };
  const timeAchievments = Number(timeEconomy(filtredArr).slice(0, 2));
  useEffect(() => {
    dispatch(actionNotification.saverTime(timeAchievments));
  }, [dispatch, timeAchievments]);

  return (
    <ul className={styles.container}>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленные деньги</p>
        <div className={styles.dataView}>
          <Wallet />
          <span className={styles.numbers}>
            {moneyEconomy(filtredArr)} &#8372;
          </span>
        </div>
      </li>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленное время</p>
        <div className={styles.dataView}>
          <Hourglass />
          <span className={styles.numbers}>{timeEconomy(filtredArr)}</span>
        </div>
      </li>
    </ul>
  );
}

export default TimeMoney;
