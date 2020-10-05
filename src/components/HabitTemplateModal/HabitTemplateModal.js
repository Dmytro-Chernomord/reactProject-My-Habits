import React from 'react';
import { useSelector } from 'react-redux';
import ModalBackdrop from '../Modal/Modal';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import Button from '../UIcomponents/Button/Button';
import habits from '../../templateHabitsList.json';
import habitsSelector from '../../redux/habits/habitsSelector';
import styles from '../ModalContent/ModalContent.module.css';

function HabitTemplateModal({ onClick, addData, goBack, onChooseHabit }) {
  const userHabits = useSelector(habitsSelector.getAllHabits);
  const userHabitsNames = userHabits.map(({ name }) => name);
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
                  userHabitsNames.includes(name)
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
          handelClick={() => goBack()}
          label={'Назад'}
        />{' '}
        <ButtonClose type="button" onClick={onClick} />
      </div>
    </div>
  );
}

export default ModalBackdrop(HabitTemplateModal);
