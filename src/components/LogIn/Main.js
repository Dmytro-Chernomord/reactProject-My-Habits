import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginForm from './LoginForm';
import styles from './rightModal.module.css';
import s from './Main.module.css';

export default function Authorization() {
  const [modalView, setmodalView] = useState(false);

  const changeModal = () => {
    setmodalView(!modalView);
  };
  const closeOnBackdop = event => {
    if (event.target === event.currentTarget && modalView) {
      changeModal();
    }
  };
  const [rightmodalView, setRightmodalView] = useState(false);

  const rightchangeModal = () => {
    setRightmodalView(!modalView);
  };
  const rightcloseOnBackdop = event => {
    if (event.target === event.currentTarget && rightmodalView) {
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
            <LoginForm />
          </div>
        </CSSTransition>
        <button type="button" onClick={changeModal}>
          login
        </button>
        <button type="button" onClick={rightchangeModal}>
          Registration
        </button>
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
