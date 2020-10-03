import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';

function DailyResultModal({ onClose }) {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = e => {
    const { value } = e.target;
    setAmount(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    console.log('hi');
    dispatch(
      cigarettesOperation.postDayCigarettes({
        startedAt: '2020-09-15T09:11:03.448Z',
        data: [12, 3, 1, 2, 13],
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
