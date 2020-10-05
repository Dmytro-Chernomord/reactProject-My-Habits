import React from 'react';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';

import styles from '../ModalContent/ModalContent.module.css';

function HabitChoiceModal({
  onClick,
  onClose,
  isTemplateModal,
  isCustomModal,
}) {
  return (
    <>
      <div className={styles.modalWrapper}>
        <h2 className={styles.modalTitle}>Добавление привычки</h2>
        <p className={styles.modalText}>
          Вы можете выбрать привычку из предложенных вариантов
        </p>
        <Button
          type={'button'}
          green={true}
          handelClick={() => {
            onClick();
            isTemplateModal();
          }}
          label={'Выбрать шаблонную привычку +'}
        />
        <p className={styles.modalText}>Или создать свою собственную</p>
        <Button
          type={'button'}
          green={true}
          handelClick={() => {
            onClick();
            isCustomModal();
          }}
          label={'Добавить свою привычку +'}
        />
        <div className={styles.emptyDiv}></div>
        <Button
          type={'button'}
          green={false}
          handelClick={() => onClose()}
          label={'Отмена'}
        />
        <ButtonClose type="button" onClick={onClose} />
      </div>
    </>
  );
}

export default ModalBackdrop(HabitChoiceModal);
