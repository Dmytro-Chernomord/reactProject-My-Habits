import React from 'react';
import ModalBackdrop from '../Modal/Modal';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import Button from '../UIcomponents/Button/Button';
import habits from '../../templateHabitsList.json';
import styles from '../ModalContent/ModalContent.module.css';

function HabitTemplateModal({ onClick, addData, goBack, onChooseHabit }) {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalCenterLayout}>
        <h2 className={(styles.modalTitle, styles.modalTitleTemplate)}>
          Шаблонные привычки
        </h2>
        <ul className={styles.modalList}>
          {habits.map(({ id, name }) => (
            <li key={id} className={styles.modalListItem}>
              <button
                className={styles.modalItem}
                type="button"
                onClick={() => {
                  onChooseHabit();
                  addData(name);
                }}
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
