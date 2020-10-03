import HabitsListItem from '../HabitsListItem/HabitsListItem';
import { useSelector } from 'react-redux';
import styles from './habitsList.module.css';
import ModalBackdrop from '../../Modal/Modal';
import ModalContent from '../../ModalContent/ModalContent';
import React, { useState, useCallback } from 'react';

export default function HabitsList() {
  const [showModal, setShowModal] = useState(false);
  const [layout, setLayout] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const { habits } = useSelector(state => state);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Привычки</h2>
        <ul className={styles.habitsList}>
          {habits.map(({ _id, name }) => (
            <HabitsListItem key={_id} text={name} />
          ))}
        </ul>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          setLayout('HabitChoiceModal');
          toggleModal();
        }}
        aria-label="Добавить привычку"
      >
        Добавить привычку +
      </button>
      {showModal && (
        <ModalBackdrop onClose={toggleModal}>
          <ModalContent onSave={toggleModal} layout={layout} />
        </ModalBackdrop>
      )}
    </div>
  );
}
