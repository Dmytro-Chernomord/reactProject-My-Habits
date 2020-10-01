import React, { useEffect } from 'react';
// // import styles from './AddHabbit.module.css';

export default function HabitTemplateModal({
  habits,
  onClick,
  onClose,
  addData,
}) {
  return (
    <div>
      <h2>Шаблонные привычки</h2>
      <ul>
        {habits.map(({ id, name }) => (
          <li key={id}>
            <button
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
      <button type="button" onClick={() => onClick('HabitChoiceModal')}>
        Назад
      </button>
      {/* <button type="button" onClick={() => onClose()}>
        X
      </button> */}
    </div>
  );
}
