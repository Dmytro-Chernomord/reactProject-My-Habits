import React, { useState } from 'react';
import Button from '../UIcomponents/Button/Button';
import DailyResultModal from '../DailyResultModal/DailyResultModal';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import styles from './MissedCigaretsNoti.module.css';
// import cigSelector from '../../redux/cigarettes/cigarettesSelector';

export function MissedCigaretsNoti({ amountDays, closeNoti }) {
  // const missedDates = useSelector(cigSelector.getMissedDatesArray);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.pop}>
      <ButtonClose type={'button'} onClick={() => closeNoti()} white={true} />
      <p className={styles.text}>
        {`У нас нет данных о сигаретах за прошедшие дни. Кол-во пропущенных дней: ${amountDays}`}
      </p>
      <div className={styles.btnWrapp}>
        <Button
          type={'button'}
          hoverWhite={true}
          handelClick={openModal}
          label={'+ за прошлые даты'}
        />
      </div>
      {showModal && <DailyResultModal onClose={closeModal}></DailyResultModal>}
    </div>
  );
}
