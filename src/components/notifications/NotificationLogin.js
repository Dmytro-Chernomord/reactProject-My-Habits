import React from 'react';
import { CSSTransition } from 'react-transition-group';
import fadeStyle from '../../Views/PrivateViews/ProfilePage/FadeProfilePage.module.css';
import styles from './NotificationLogin.module.css';
import { ReactComponent as Close } from '../../images/svg-icons/close-red.svg';

const NotificationLogin = ({
  setShowError,
  showError,
  text,
  textPort,
  onClickClose,
}) => {
  return (
    <div className={styles.box}>
      <button type="button" onClick={onClickClose} className={styles.btnClose}>
        <Close width="15" height="15" />
      </button>

      <div className={styles.boxError}>
        <p className={styles.error}>
          {text}
          <button
            className={styles.btnError}
            onClick={() => setShowError(prev => !prev)}
          >
            {textPort}
          </button>
        </p>
        <CSSTransition
          in={showError}
          classNames={fadeStyle}
          timeout={250}
          unmountOnExit
        >
          <p className={styles.error}>
            Ошибка 400: извините, произошла ошибка сервера, попробуйте позже
          </p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default NotificationLogin;
