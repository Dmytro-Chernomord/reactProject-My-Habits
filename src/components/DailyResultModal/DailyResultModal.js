import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';
import cigSelector from '../../redux/cigarettes/cigarettesSelector';
import {
  checkSigaretteStatiscs,
  checkSigaretteMissedDates,
} from '../../helpers/checkSigaretteStatiscs';

////----------------------------------------------------------
function DailyResultModal({ onClose }) {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const handleInputChange = e => {
    const { value } = e.target;
    setAmount(value);
  };

  const cigarettesStartedAt = useSelector(
    cigSelector.getCigarettesDataStartedAt,
  );
  const cigarettesArray = useSelector(cigSelector.getCigarettesArray);

  const today = new Date();
  const parseStartedAt = new Date(cigarettesStartedAt);
  const dif = Math.floor(
    (Date.parse(today) - Date.parse(parseStartedAt)) / MS_PER_DAY,
  );

  useEffect(() => {
    if (cigarettesArray) {
      checkSigaretteMissedDates(cigarettesArray, dif, parseStartedAt);
      console.log(
        'checkSigaretteMissedDates:',
        checkSigaretteMissedDates(cigarettesArray, dif, parseStartedAt),
      );
    }
  }, [cigarettesArray, dif, parseStartedAt]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(
      cigarettesOperation.postDayCigarettes({
        startedAt: cigarettesStartedAt,
        data: checkSigaretteStatiscs(cigarettesArray, dif, Number(amount)),
      }),
    );
    onClose();
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
        </div>
        <ButtonClose type="button" onClick={onClose} />
      </form>
    </div>
  );
}
export default ModalBackdrop(DailyResultModal);
