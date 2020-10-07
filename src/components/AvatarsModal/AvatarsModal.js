import React from 'react';
import AvatarUser from '../AvatarUser/AvatarUser';
import ModalBackdrop from '../Modal/Modal';
import Button from '../UIcomponents/Button/Button';
import ButtonClose from '../UIcomponents/ButtonClose/ButtonClose';
import { Redirect } from 'react-router-dom';
import routes from '../../routes';
import styles from '../ModalContent/ModalContent.module.css';

function AvatarsModal({ onClose }) {
  return (
    <div className={styles.modalWrapper}>
      {/* // <h2 className={styles.modalTitleCustom}>Вы изменили аватар!</h2>
      // <AvatarUser width={'200'} /> */}
      {/* <button className={styles.btn} type="button" onClick={onClose}>
        Закрыть
      </button> */}
      {/* <div className={styles.btnFolder}> */}
      <Redirect to={`/home/ProfilePage`}>
        <Button
          type={'button'}
          green={false}
          handelClick={() => onClose()}
          label={'Закрыть'}
        />
      </Redirect>
      {/* </div> */}
      {/* <ButtonClose type="button" onClick={onClose} /> */}
    </div>
  );
}
export default ModalBackdrop(AvatarsModal);
