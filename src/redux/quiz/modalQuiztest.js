import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import quizOperation from '../quiz/quizOperation';
// import styles from './AddHabbit.module.css';

export default function InterviewModal({ onClose }) {
  const [years, setYears] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'years':
        setYears(value);
        break;

      case 'amount':
        setAmount(value);
        break;

      case 'time':
        setTime(value);
        break;

      case 'price':
        setPrice(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    // console.log('hi');
    dispatch(
      quizOperation.quizComplete({
        smokeYears: years,
        cigarettePerDay: amount,
        cigarettePerTime: time,
        cigarettePackPrice: price,
      }),
    );
  };

  return (
    <div>
      <h2>Ответьте на 4 коротких вопроса. </h2>
      <p>Так мы сможем более точно дать вам рекомендации:</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="years">Сколько лет Вы курите?</label>
        <input
          type="number"
          name="years"
          id="years"
          value={years}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Сколько сигарет скуриваете в день?</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={handleInputChange}
        />
        <label htmlFor="time">Сколько вемени у Вас уходит на 1 сигарету?</label>
        <input
          type="number"
          name="time"
          id="time"
          value={time}
          onChange={handleInputChange}
        />
        <label htmlFor="price">Сколько стоит одна пачка сигарет?</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={handleInputChange}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
