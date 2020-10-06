import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './NotificationModal.module.css';
import fadeNotificationStyles from './fadeNotification.module.css';
import { CSSTransition } from 'react-transition-group';

const NotificationModal = () => {
  const [show, setShow] = useState(false);

  const errors = useSelector(state => state.errors);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [errors]);

  return (
    <>
      {errors && (
        <CSSTransition
          in={show}
          classNames={fadeNotificationStyles}
          timeout={250}
          unmountOnExit
        >
          <div className={styles.box}>
            Извините, произошла ошибка, попробуйте позже.
          </div>
        </CSSTransition>
      )}
    </>
  );
};

export default NotificationModal;
