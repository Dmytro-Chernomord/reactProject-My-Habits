import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Money } from '../../../images/svg-icons/hourglass.svg';
import { ReactComponent as Time } from '../../../images/svg-icons/wallet.svg';
import styles from './TimeMoney.module.css';

function TimeMoney() {
  const { quiz } = useSelector(state => state);
  const state = useSelector(state => state);
  // console.log(state);

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

  // console.log(cigTimePerDay(quiz.cigarettePerTime, quiz.cigarettePerDay));
  // console.log(cigMoneyPerDay(quiz.cigarettePackPrice, quiz.cigarettePerDay));

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

  // console.log(getFiltredCig(state.cigarettes.data));

  const filtredArr = getFiltredCig(state.cigarettes.data);

  const moneyEconomy = filtredArr => {
    const sumOfEconomyMoney = filtredArr.reduce((acc, arrItem) => {
      const staticCigMoney = cigMoneyPerDay(
        quiz.cigarettePackPrice,
        quiz.cigarettePerDay,
      );
      const dynamicCigMoney = cigMoneyPerDay(quiz.cigarettePackPrice, arrItem);
      const result = staticCigMoney - dynamicCigMoney;
      // console.log(`arrItem ${arrItem}`);
      // console.log(`staticCigMoney ${staticCigMoney}`);
      // console.log(`dynamicCigMoney ${dynamicCigMoney}`);
      // console.log(`result ${result}`);
      // console.log(`acc ${acc}`);
      return acc + result;
    }, 0);
    // return (Math.round(sumOfEconomyMoney * 100) / 100).toFixed(1);
    return Math.round(sumOfEconomyMoney * 100) / 100;
  };

  // console.log(moneyEconomy(filtredArr));

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

  // console.log(timeEconomy(filtredArr));

  return (
    <ul className={styles.container}>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленные деньги</p>
        <div className={styles.dataView}>
          <Time />
          <span className={styles.numbers}>{moneyEconomy(filtredArr)}</span>
        </div>
      </li>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленное время</p>
        <div className={styles.dataView}>
          <Money />
          <span className={styles.numbers}>{timeEconomy(filtredArr)}</span>
        </div>
      </li>
    </ul>
  );
}

export default TimeMoney;
