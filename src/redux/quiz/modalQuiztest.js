import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import quizOperation from '../quiz/quizOperation';
import ModalBackdrop from '../../components/Modal/Modal';
import Button from '../../components/UIcomponents/Button/Button';
import styles from '../../components/ModalContent/ModalContent.module.css';

function InterviewModal({ onClose }) {
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
    onClose();
  };

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Ответьте на 4 коротких вопроса.
      </h2>
      <p className={styles.modalTextCustom}>
        Так мы сможем более точно дать вам рекомендации:
      </p>
      <form onSubmit={onSubmit} className={styles.formProfile}>
        <label htmlFor="years" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>Сколько лет Вы курите?</span>
          <input
            type="number"
            name="years"
            id="years"
            value={years}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="amount" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько сигарет скуриваете в день?
          </span>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="time" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько вемени у Вас уходит на 1 сигарету?
          </span>
          <input
            type="number"
            name="time"
            id="time"
            value={time}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <label htmlFor="price" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>
            Сколько стоит одна пачка сигарет?
          </span>

          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <div>
          <Button
            type={'submit'}
            green={true}
            handelClick={() => onClose()}
            label={'Сохранить'}
          />
        </div>
      </form>
    </div>
  );
}

export default ModalBackdrop(InterviewModal);
