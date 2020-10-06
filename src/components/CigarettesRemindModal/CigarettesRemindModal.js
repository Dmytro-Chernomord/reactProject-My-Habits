import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from '../ModalContent/ModalContent.module.css';
import cigarettesOperation from '../../redux/cigarettes/cigarettesOperation';
import cigSelector from '../../redux/cigarettes/cigarettesSelector';
import { checkSigaretteStatiscs } from '../../helpers/checkSigaretteStatiscs';

function CigaretteRemindModal({ onClose }) {
  const [amount, setAmount] = useState({});
  const dispatch = useDispatch();

  //   const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const missedDates = useSelector(cigSelector.getMissedDatesArray);
  //   console.log(missedDates);
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const handleInputChange = e => {
    let data = {};

    const { value, name } = e.target;
    // const test = { data[name]: value };
    // data = { ...test };
    // setAmount({ id: name, number: value });
    // setAmount({ id: name, number: value });
    // console.log('value', value, 'name', name);
    data[name] = value;
    // console.log(data);
    setAmount(prev => ({ ...prev, ...data }));
    console.log(arr);
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   console.log(element);
    //   if (i === name) {
    //     console.log(name);
    //   }
    //   arr.splice(`${name}`, 0, `${value}`);
    // }
    // setAmount(data);
    // data[name] = value;
    // setAmount(prev => [...prev, ...data]);
  };
  console.log(amount);

  // console.log(amount);

  //   const cigarettesStartedAt = useSelector(
  //     cigSelector.getCigarettesDataStartedAt,
  //   );
  //   const cigarettesArray = useSelector(cigSelector.getCigarettesArray);

  //   const today = new Date();
  //   const parseStartedAt = new Date(cigarettesStartedAt);
  //   const dif = Math.floor(
  //     (Date.parse(today) - Date.parse(parseStartedAt)) / MS_PER_DAY,
  //   );

  const onSubmit = e => {
    e.preventDefault();
    // dispatch(
    //   cigarettesOperation.postDayCigarettes({
    //     startedAt: cigarettesStartedAt,
    //     data: checkSigaretteStatiscs(cigarettesArray, dif, Number(amount)),
    //   }),
    // );
    onClose();
  };

  return (
    <div className={styles.modalWrapper}>
      <h2 className={styles.modalTitleCustom}>
        Введите, пожалуйста, данные за прошедшие дни:
      </h2>
      <p className={styles.modalTextCustom}>Вы забыли заполнить</p>
      <form onSubmit={onSubmit} className={styles.formProfile}>
        {missedDates.map(({ index, date }) => (
          <label className={styles.labelDailyResult} key={index}>
            <span className={styles.textLabelDailyResult}>
              {date.slice(0, 10)}
            </span>
            <input
              type="number"
              name={index}
              // value={amount}
              onChange={handleInputChange}
              className={styles.input}
            />
          </label>
        ))}
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
