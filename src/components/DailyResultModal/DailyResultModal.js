import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';
import cigSelector from '../../redux/cigarettes/cigarettesSelector';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

function DailyResultModal({ onClose }) {
  const cigarettesStartedAt = useSelector(
    cigSelector.getCigarettesDataStartedAt,
  );
  const cigarettesArray = useSelector(cigSelector.getCigarettesArray);
  console.log('array', cigarettesArray);
  console.log(cigarettesStartedAt);

  // const startedAt = '2020-09-27T09:11:03.448Z';
  const today = new Date();
  const parseStartedAt = new Date(cigarettesStartedAt);

  const dif = Math.floor(
    (Date.parse(today) - Date.parse(parseStartedAt)) / MS_PER_DAY,
  );
  const cigToday = cigarettesArray[dif];
  console.log('zigaretHeute', cigToday);
  console.log('dif', dif);

  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = e => {
    const { value } = e.target;
    setAmount(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      cigarettesOperation.postDayCigarettes({
        startedAt: '2020-10-04T09:11:03.448Z',
        data: [12, 3, 1, 2, 13, 1, 1, 1, 1, 11, 1, 13, 12, 43, 34, 34],
      }),
    );
  };
  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Сколько сигарет за сегодня Вы выкурили?{' '}
      </h2>
      <p className={styles.modalTextCustom}>
        Давайте вместе постараемся свести это число к нулю.
      </p>
      <form onSubmit={onSubmit} className={styles.formProfile}>
        <label className={styles.labelDailyResult}>
          <span className={styles.textLabelDailyResult}>
            Количество сигарет
          </span>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleInputChange}
            className={styles.input}
          />
        </label>
        <div className={styles.btnFolder}>
          <div className={styles.btnBox}>
            <Button
              type={'button'}
              green={false}
              handelClick={() => onClose()}
              label={'Отмена'}
            />
          </div>
          <div>
            <Button
              type={'submit'}
              green={true}
              // handelClick={() => onClose()}
              label={'Сохранить'}
            />
          </div>
        </div>{' '}
        <ButtonClose type="button" onClick={onClose} />
      </form>
      {/* 
      <button type="button" onClick={onClose}>
        Отмена
      </button>
      <button type="submit">Сохранить</button> */}
    </div>
  );
}
export default ModalBackdrop(DailyResultModal);
