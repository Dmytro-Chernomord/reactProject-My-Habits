import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Money } from '../../../images/svg-icons/trash-grey.svg';
import { ReactComponent as Time } from '../../../images/svg-icons/trash-grey.svg';
import styles from './TimeMoney.module.css';

function TimeMoney() {
  const { quiz } = useSelector(state => state);
  const state = useSelector(state => state);
  console.log(state);

  function cigMoneyPerDay(cigPackPrice, cigPerDay) {
    const cigPerPack = 20;
    const cigPrice = cigPackPrice / cigPerPack;
    const result = cigPrice * cigPerDay;
    return result;
  }

  console.log(cigMoneyPerDay(quiz.cigarettePackPrice, quiz.cigarettePerDay));

  const getFiltredCig = cigArr => {
    return cigArr.filter(cigArrItem => cigArrItem);
  };
  console.log(getFiltredCig(state.cigarettes.data));
  const filtredArr = getFiltredCig(state.cigarettes.data);

  const moneyEconomy = filtredArr => {
    const sumOfEconomyMoney = filtredArr.reduce((acc, arrItem) => {
      const staticCigMoney = cigMoneyPerDay(
        quiz.cigarettePackPrice,
        quiz.cigarettePerDay,
      );
      const dynamicCigMoney = cigMoneyPerDay(quiz.cigarettePackPrice, arrItem);
      const result = staticCigMoney - dynamicCigMoney;
      console.log(`arrItem ${arrItem}`);
      console.log(`staticCigMoney ${staticCigMoney}`);
      console.log(`dynamicCigMoney ${dynamicCigMoney}`);
      console.log(`result ${result}`);
      console.log(`acc ${acc}`);
      return acc + result;
    }, 0);
    return sumOfEconomyMoney;
  };

  console.log(moneyEconomy(filtredArr));

  return (
    <ul className={styles.container}>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленные деньги</p>
        <div className={styles.dataView}>
          <Time />
          <span className={styles.numbers}>{quiz.cigarettePackPrice}</span>
        </div>
      </li>
      <li className={styles.timeMoneyBox}>
        <p className={styles.economyText}>Сэкономленное время</p>
        <div className={styles.dataView}>
          <Money />
          <span className={styles.numbers}>{quiz.cigarettePerTime}</span>
        </div>
      </li>
    </ul>
  );
}

export default TimeMoney;
