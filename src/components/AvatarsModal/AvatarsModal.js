import React, { useEffect, useState } from 'react';
import avatars from '../../avatars';

function AvatarsModal({ onClose }) {
  return (
    <div>
      <h2>Вы действительно хотите изменить аватар?</h2>
      <p>Выбраный аватар:</p>
      {/* {avatars.map(el => {
        if (id === el.id) {
          return <img key={el.id} src={el.avatar} alt="avatar" width="108" />;
        }
      })} */}
      <button type="button">Изменить</button>
      <button type="button" onClick={onClose}>
        Отмена
      </button>
    </div>
  );
}
export default AvatarsModal;
