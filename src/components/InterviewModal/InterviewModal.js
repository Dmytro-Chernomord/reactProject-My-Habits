import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import quizOperation from '../../redux/quiz/quizOperation';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import styles from '../ModalContent/ModalContent.module.css';

function InterviewModal({ onClose }) {
  const [smokeYears, setSmokeYears] = useState('');
  const [cigarettePerDay, setCigarettePerDay] = useState('');
  const [cigarettePerTime, setCigarettePerTime] = useState('');
  const [cigarettePackPrice, setCigarettePackPrice] = useState('');
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    quiz => dispatch(quizOperation.quizComplete(quiz)),
    [dispatch],
  );

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'years':
        setSmokeYears(value);
        break;

      case 'amount':
        setCigarettePerDay(value);
        break;

      case 'time':
        setCigarettePerTime(value);
        break;

      case 'price':
        setCigarettePackPrice(value);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // console.log('hi');
    const data = {
      smokeYears,
      cigarettePerDay,
      cigarettePerTime,
      cigarettePackPrice,
    };
    onSubmit(data);

    // dispatch(
    //   quizOperation.quizComplete({
    //     smokeYears: years,
    //     cigarettePerDay: amount,
    //     cigarettePerTime: time,
    //     cigarettePackPrice: price,
    //   }),
    // );
    // onClose();
  };

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Ответьте на 4 коротких вопроса.
      </h2>
      <p className={styles.modalTextCustom}>
        Так мы сможем более точно дать вам рекомендации:
      </p>
      <form onSubmit={handleFormSubmit} className={styles.formProfile}>
        <label htmlFor="years" className={styles.labelQuiz}>
          <span className={styles.textLabelQuiz}>Сколько лет Вы курите?</span>
          <input
            type="number"
            name="years"
            id="years"
            value={smokeYears}
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
            value={cigarettePerDay}
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
            value={cigarettePerTime}
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
            value={cigarettePackPrice}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <div>
          <Button
            type={'submit'}
            green={true}
            // handelClick={() => onClose()}
            label={'Сохранить'}
          />
        </div>
      </form>
    </div>
  );
}

export default ModalBackdrop(InterviewModal);
