import HabitsListItem from '../HabitsListItem/HabitsListItem';
import { useSelector } from 'react-redux';
import styles from './habitsList.module.css';
import ModalBackdrop from '../../Modal/Modal';
import ModalContent from '../../ModalContent/ModalContent';
import React, { useState, useCallback } from 'react';
import HabitChoiceModal from '../../HabitChoiceModal/HabitChoiceModal';
import CustomHabbitModal from '../../CustomHabbitModal/CustomHabbitModal';

export default function HabitsList() {
  const [showModal, setShowModal] = useState(false);
  const [layout, setLayout] = useState(false);
  const [templateHabit, setTemplateHabit] = useState('');

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

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
          setShowModal(true);
          // setLayout('HabitChoiceModal');
          // toggleModal();
        }}
        aria-label="Добавить привычку"
      >
        Добавить привычку +
      </button>
      {showModal && (
        <HabitChoiceModal
          onClose={toggleModal}
          onClick={() => {
            setTemplateHabit();
            toggleModal();
          }}
        >
          {/* <ModalContent
            onSave={toggleModal}
            layout={layout}
            // ableToDelete={isAbleToDelete}
          /> */}
        </HabitChoiceModal>
      )}
    </div>
  );
}
