import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import CigarettesRemindModal from '../CigarettesRemindModal/CigarettesRemindModal';
import styles from './MissedCigaretsNoti.module.css';
import transitionStyles from '../ModalContent/ModalTransition.module.css';

export function MissedCigaretsNoti({ amountDays, closeNoti }) {
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
      <CSSTransition
        in={showModal}
        timeout={250}
        classNames={transitionStyles}
        unmountOnExit
      >
        <CigarettesRemindModal onClose={closeModal}></CigarettesRemindModal>
      </CSSTransition>
    </div>
  );
}
