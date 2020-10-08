import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';
import cigSelector from '../../redux/cigarettes/cigarettesSelector';

function CigaretteRemindModal({ onClose }) {
  const [amount, setAmount] = useState({});
  const dispatch = useDispatch();
  const cigarettesArray = useSelector(cigSelector.getCigarettesArray);
  const startedAt = useSelector(cigSelector.getCigarettesDataStartedAt);

  const missedDates = useSelector(cigSelector.getMissedDatesArray);

  const handleInputChange = e => {
    let data = {};
    const { value, name } = e.target;
    data[name] = value;
    setAmount(prev => ({ ...prev, ...data }));
  };
  const onSubmit = e => {
    e.preventDefault();
    let result = [];
    let config = [...cigarettesArray];
    for (let i = 0; i < cigarettesArray.length; i++) {
      const element = cigarettesArray[i];
      const key = Object.keys(amount);
      const value = Object.values(amount);
      for (let y = 0; y < key.length; y++) {
        const e = Number(key[y]);
        const v = Number(value[y]);

        if (i === e) {
          result.push(v);
          break;
        }
      }
      if (typeof element === 'number') {
        result.push(element);
        // continue;
      }
    }

    // console.log(config.splice(0, `${result.length}`, ...result));

    dispatch(
      cigarettesOperation.postDayCigarettes({
        startedAt: startedAt,
        data: config,
      }),
    );
    onClose();
  };

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Введите, пожалуйста, данные за прошедшие дни:
      </h2>
      <p className={styles.modalTextCustom}>Вы забыли заполнить</p>
      <form onSubmit={onSubmit} className={styles.formProfile}>
        <div className={styles.modalList}>
          {missedDates.map(({ index, date }) => (
            <label className={styles.labelRemindModal} key={index}>
              <span className={styles.textLabelDailyResult}>
                {date.slice(0, 10)}
              </span>
              <input
                type="number"
                name={index}
                // value={amount}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </label>
          ))}
        </div>
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
export default ModalBackdrop(CigaretteRemindModal);
