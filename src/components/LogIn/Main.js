import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginForm from './LoginForm';
import styles from './rightModal.module.css';
import s from './Main.module.css';
import Button from '../UIcomponents/Button/Button';
import RegisterForm from './RegisterForm';

export default function Authorization() {
  const [modalView, setmodalView] = useState(false);
  const [rightmodalView, setRightmodalView] = useState(false);

  const changeModal = () => {
    setmodalView(!modalView);
  };
  const rightchangeModal = () => {
    setRightmodalView(!rightmodalView);
  };
  const closeOnBackdop = event => {
    if (event.target === event.currentTarget && modalView) {
      // changeModal();
      changeModal();
    } else if (event.target === event.currentTarget && rightmodalView) {
      // changeModal();
      rightchangeModal();
    }
  };

  return (
    <>
      <div className={s.div} onClick={closeOnBackdop}>
        <h1>«Курение ослабляет силу мысли и делает неясным её выражение».</h1>
        <sup>Л.Н.Толсой</sup>
        <h2>Добро пожаловать!</h2>
        <p>
          Войдите или зарегистрируйтесь, чтобы начать использовать наше
          приложение
        </p>
        <CSSTransition
          in={rightmodalView}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.backdrop}>
            {' '}
            <RegisterForm />
          </div>
        </CSSTransition>
        {/* <button type="button" onClick={changeModal}>
          login
        </button> */}
        <div className={s.buttonDiv}>
          <div className={s.buttonLogin}>
            <Button
              type="button"
              handelClick={changeModal}
              label="Login"
              green={true}
            />
          </div>

          <Button
            type="button"
            handelClick={rightchangeModal}
            label="Registration"
          />
        </div>
        <CSSTransition
          in={modalView}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <div className={s.backdrop}>
            <LoginForm />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}
