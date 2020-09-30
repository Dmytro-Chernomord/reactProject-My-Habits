import React, { useEffect } from 'react';
import CreateHabbitForm from '../CreateHabbitForm/CreateHabbitForm';
// import styles from './AddHabbit.module.css';

export default function CustomHabbit({ onClose }) {
  return (
    <div>
      <h2>Настройте привычку под себя</h2>
      <p>так Вам будет удобнее достичь своей цели</p>
      <CreateHabbitForm onClose={onClose} />
    </div>
  );
}
