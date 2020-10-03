import React from 'react';
import Button from '../UIcomponents/Button/Button';
import styles from '../ModalContent/ModalContent.module.css';

export default function HabitTemplateModal({ habits, onClick, addData }) {
  return (
    <div className={styles.modalContent}>
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
                onClick('CustomHabbitModal');
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
        handelClick={() => onClick('HabitChoiceModal')}
        label={'Назад'}
      />
    </div>
  );
}
