import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';
import cigSelector from '../../redux/cigarettes/cigarettesSelector';

const MS_PER_DAY = 1000 * 60 * 60 * 24;
const checkSigaretteStatiscs = (cigarettesArray, dif) => {
  let result = [];
  const testValue = 3;
  for (let i = 0; i < 21; i++) {
    const element = cigarettesArray[i];
    if (i - dif < 0 && element === null) {
      const dayWthoutInfo = Date.parse(new Date()) - i * MS_PER_DAY;
      //   (Date.parse(new Date()) - dif * MS_PER_DAY) / MS_PER_DAY;

      // console.log('dayWthoutInfo', dayWthoutInfo);

      // console.log(new Date());
      console.log(new Date(dayWthoutInfo));
      console.log('showModal');
      console.log('element', element, 'i', i);
    }
    if (i - dif === 0) {
      if (element !== null) {
        const newSigValue = element + testValue;
        result.push(newSigValue);
        continue;
      }
      if (element === null) {
        result.push(testValue);
        continue;
      }
    }
    if (typeof cigarettesArray[dif] === 'number' && i === dif) {
      // cigarettesArray[dif] = cigarettesArray[dif] + testInputValue;
      console.log('iz for');
      // const a = cigarettesArray[dif] - 3;
      // return result;
    }
    if (element !== undefined) {
      result.push(element);
    }
    if (element === undefined) {
      result.push(null);
    }
  }

  return result;
};

function DailyResultModal({ onClose }) {
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
        startedAt: '2020-09-28T09:11:03.448Z',
        data: [12, 3, 3, null, 13, 6, null, 10, 1, 11, 1, 13, 12, 43, 34, 34],
      }),
    );
  };

  const cigarettesStartedAt = useSelector(
    cigSelector.getCigarettesDataStartedAt,
  );
  const cigarettesArray = useSelector(cigSelector.getCigarettesArray);

  // const startedAt = '2020-09-27T09:11:03.448Z';
  const today = new Date();
  const parseStartedAt = new Date(cigarettesStartedAt);
  const testInputValue = 3;
  const dif = Math.floor(
    (Date.parse(today) - Date.parse(parseStartedAt)) / MS_PER_DAY,
  );
  console.log('dif', cigarettesArray[dif]);
  const cigToday = cigarettesArray[0];

  console.log('zigaretHeute', cigToday);
  console.log('dif', dif);
  useEffect(() => {
    if (cigarettesArray) {
      checkSigaretteStatiscs(cigarettesArray, dif);
      console.log(checkSigaretteStatiscs(cigarettesArray, dif));
    }
    // return () => {
    //   cleanup
    // }
  }, [cigarettesArray, dif]);

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
