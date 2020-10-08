import React from 'react';
import { useSelector } from 'react-redux';
import ModalBackdrop from '../Modal/Modal';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import Button from '../UIcomponents/Button/Button';
import habitsSelector from '../../redux/habits/habitsSelector';
import habits from '../../templateHabitsList.json';
import styles from '../ModalContent/ModalContent.module.css';

function HabitTemplateModal({ addData, goBack, onChooseHabit, onClose }) {
  const userHabits = useSelector(habitsSelector.getAllHabits);
  const userHabitsNames = userHabits.map(({ name }) => name.toLowerCase());

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalCenterLayout}>
        <h2 className={(styles.modalTitle, styles.modalTitleTemplate)}>
          Шаблонные привычки
        </h2>
        <ul className={styles.modalList}>
          {habits.map(({ id, name }) => (
            <li key={id} className={styles.modalListItem}>
              <button
                className={
                  userHabitsNames.includes(name.toLowerCase())
                    ? styles.modalItemDisabled
                    : styles.modalItem
                }
                type="button"
                onClick={() => {
                  onChooseHabit();
                  addData(name);
                }}
                disabled={userHabitsNames.includes(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
        <Button
          type={'button'}
          green={false}
          handelClick={goBack}
          label={'Назад'}
        />{' '}
        <ButtonClose type="button" onClick={onClose} />
      </div>
    </div>
  );
}

export default ModalBackdrop(HabitTemplateModal);
