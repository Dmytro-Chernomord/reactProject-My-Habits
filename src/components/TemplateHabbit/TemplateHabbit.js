import React, { useEffect } from 'react';
// // import styles from './AddHabbit.module.css';

export default function TemplateHabbit({ habbits, onClick }) {
  return (
    <div>
      <h2>Шаблонные привычки</h2>
      <ul>
        <li>
          <button type="button" onClick={() => onClick('CustomHabbit')}>
            привычка 1
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClick('CustomHabbit')}>
            привычка 2
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClick('CustomHabbit')}>
            привычка 3
          </button>
        </li>
      </ul>
      <button type="button" onClick={() => onClick('AddHabbit')}>
        Отмена
      </button>
    </div>
  );
}
