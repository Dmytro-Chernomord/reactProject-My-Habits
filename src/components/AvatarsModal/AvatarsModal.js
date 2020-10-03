import React from 'react';
import AvatarUser from '../AvatarUser/AvatarUser';
import styles from './AvatarsModal.module.css';

function AvatarsModal({ onClose }) {
  return (
    <div className={styles.boxAvatarsModal}>
      <h2>Вы изменили аватар!</h2>
      <AvatarUser width={'200'} />

      <button className={styles.btn} type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
}
export default AvatarsModal;
