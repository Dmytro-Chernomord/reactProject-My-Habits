import React from 'react';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import { Redirect } from 'react-router-dom';
import styles from '../ModalContent/ModalContent.module.css';

function AvatarsModal({ onClose }) {
  return (
    <div className={styles.modalWrapper}>
      <Redirect to={`/home/ProfilePage`}>
        <Button
          type={'button'}
          green={false}
          handelClick={() => onClose()}
          label={'Закрыть'}
        />
      </Redirect>
    </div>
  );
}
export default ModalBackdrop(AvatarsModal);
