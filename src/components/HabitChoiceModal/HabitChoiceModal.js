import React, { useState, useEffect } from 'react';

export default function HabitChoiceModal({ onClick, onClose }) {
  return (
    <>
      <div>
        <h2>Добавление новой привычки</h2>
        <p>Вы можете выбрать привычку из предложенных вариантов</p>
        <button type="button" onClick={() => onClick('HabitTemplateModal')}>
          Выбрать шаблонную привычку
        </button>
        <p>Или создать свою собственную</p>
        <button type="button" onClick={() => onClick('CustomHabbitModal')}>
          Добавить свою привычку
        </button>
        <button type="button" onClick={() => onClose()}>
          Отмена
        </button>
        <button type="button" onClick={() => onClose()}>
          X
        </button>
      </div>
    </>
  );
}
