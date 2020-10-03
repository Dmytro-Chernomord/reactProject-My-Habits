import React, { useState } from 'react';
// import styles from './AddHabbit.module.css';

export default function DailyResultModal({ onClose }) {
  const [amount, setAmount] = useState('');

  const handleInputChange = e => {
    const { value } = e.target;
    setAmount(value);
  };

  return (
    <div>
      <h2>Сколько сигарет за сегодня Вы выкурили? </h2>
      <p>Давайте вместе постараемся свести это число к нулю.</p>
      <form onSubmit={() => null}>
        <label>
          Количество сигарет
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button type="button" onClick={onClose}>
        Отмена
      </button>
      <button type="submit">Сохранить</button>
    </div>
  );
}
