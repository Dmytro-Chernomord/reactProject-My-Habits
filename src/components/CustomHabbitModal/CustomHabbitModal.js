import React, { useEffect } from 'react';
import CustomHabbitForm from './CustomHabbitForm/CustomHabbitForm';
// import styles from './AddHabbit.module.css';

export default function CustomHabbitModal({ onClose }) {
  return (
    <div>
      <h2>Настройте привычку под себя</h2>
      <p>так Вам будет удобнее достичь своей цели</p>
      <CustomHabbitForm onClose={onClose} />
    </div>
  );
}
