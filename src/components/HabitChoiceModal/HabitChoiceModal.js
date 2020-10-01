import React, { useState, useEffect } from 'react';
import Button from '../UIcomponents/Button/Button';
import styles from '../ModalContent/ModalContent.module.css';

export default function HabitChoiceModal({ onClick, onClose }) {
  return (
    <>
      <div>
        <h2 className={styles.modalTitle}>Добавление привычки</h2>
        <p className={styles.modalText}>
          Вы можете выбрать привычку из предложенных вариантов
        </p>
        <Button
          type={'button'}
          green={true}
          handelClick={() => onClick('HabitTemplateModal')}
          label={'Выбрать шаблонную привычку +'}
        />
        <p className={styles.modalText}>Или создать свою собственную</p>
        <Button
          type={'button'}
          green={true}
          handelClick={() => onClick('CustomHabbitModal')}
          label={'Добавить свою привычку +'}
        />
        <div className={styles.emptyDiv}></div>
        <Button
          type={'button'}
          green={false}
          handelClick={() => onClose()}
          label={'Отмена'}
        />
      </div>
    </>
  );
}
