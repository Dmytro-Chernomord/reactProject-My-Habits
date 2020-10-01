import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import LoginForm from './LoginForm';
import s from './rightModal.module.css';
import styles from './Main.module.css';
// import Button from '../UIcomponents/Button/Button';
import RegisterForm from './RegisterForm';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabit.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';

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
    console.log('hi');
    console.log('event.currentTarget);', event.currentTarget);
    console.log('event.target);', event.target);

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
      <div className={styles.HomeContainer}>
        <div className={styles.Home}>
          <div className={styles.HomeLeft}>
            <div className={styles.HomeBackground1}></div>
            <div className={styles.HomeBackground2}></div>
          </div>

          <div className={styles.HomeCentre}>
            <div className={styles.HomeBlock}>
              <p className={styles.HomeTitle}>
                «Курение ослабляет силу мысли и делает неясным её выражение».
              </p>
              <p className={styles.HomeTitleName}>Л.Н.Толстой</p>
              <div className={styles.HomeLogo}>
                <div className={styles.HomeLogoSvg}>
                  <div className={styles.HomeLogoPng}>
                    <Svg />
                  </div>
                </div>
                <Logo />
              </div>
              <p className={styles.HomeTitleHi}>Добро пожаловать!</p>
              <p className={styles.HomeTitleTxt}>
                Войдите или зарегистрируйтесь, чтобы начать использовать наше
                приложение
              </p>
              {/* <CSSTransition
                in={rightmodalView}
                timeout={250}
                classNames={s}
                unmountOnExit
              >
                <div className={s.backdrop}>
                  {' '}
                  <RegisterForm />
                </div>
              </CSSTransition>{' '}
              <CSSTransition
                in={modalView}
                timeout={250}
                classNames={styles}
                unmountOnExit
              >
                <div className={styles.backdrop}>
                  <LoginForm />
                </div>
              </CSSTransition> */}
              <div className={styles.HomeButtonBlock}>
                <button onClick={changeModal} className={styles.HomeButton}>
                  <p className={styles.HomeEnterTxt}>Вход</p>
                </button>

                <button
                  className={styles.HomeButton}
                  onClick={rightchangeModal}
                >
                  <p className={styles.HomeEnterTxt}>Регистрация</p>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.HomeRight}>
            <div className={styles.HomeBackground3}></div>
            <div className={styles.HomeBackground4}></div>
          </div>
        </div>
        <CSSTransition
          in={rightmodalView}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <div className={s.backdrop}>
            {' '}
            <RegisterForm />
          </div>
        </CSSTransition>{' '}
        <CSSTransition
          in={modalView}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.backdrop}>
            <LoginForm />
          </div>
        </CSSTransition>
      </div>
      <div onClick={closeOnBackdop} className={s.overlay}>
        <CSSTransition
          in={rightmodalView}
          timeout={250}
          classNames={s}
          unmountOnExit
        >
          <div className={s.backdrop}>
            {' '}
            <RegisterForm />
          </div>
        </CSSTransition>{' '}
        <CSSTransition
          in={modalView}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.backdrop}>
            <LoginForm />
          </div>
        </CSSTransition>
      </div>
      {/* <div className={s.div} onClick={closeOnBackdop}>
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
        </CSSTransition> */}
      {/* <button type="button" onClick={changeModal}>
          login
        </button> */}
      {/* <div className={s.buttonDiv}>
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
      </div> */}
    </>
  );
}
