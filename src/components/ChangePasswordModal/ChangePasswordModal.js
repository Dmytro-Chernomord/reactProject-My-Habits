import React, { useEffect, useState } from 'react';

export default function ChangePasswordModal({ onClose }) {
  return (
    <div>
      <h2>Поменять пароль</h2>
      <form onSubmit={() => null}>
        <label>
          Новый пароль
          <input />
        </label>
        <label>
          Новый пароль ещё раз
          <input />
        </label>
      </form>
      <button type="button" onClick={onClose}>
        Отмена
      </button>
      <button type="submit">Сохранить</button>
    </div>
  );
}
