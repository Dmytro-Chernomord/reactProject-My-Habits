import React, { useEffect, useState } from 'react';
// import styles from './AddHabbit.module.css';

export default function InterviewModal({ onClose }) {
  const [years, setYears] = useState('');
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');

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

  return (
    <div>
      <h2>Ответьте на 4 коротких вопроса. </h2>
      <p>Так мы сможем более точно дать вам рекомендации:</p>
      <form onSubmit={() => null}>
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
      </form>
      <button type="submit">Сохранить</button>
    </div>
  );
}
