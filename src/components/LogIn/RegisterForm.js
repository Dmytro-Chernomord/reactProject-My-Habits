import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperation';
import styles from './rightModal.module.css';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyepass, setEyePass] = useState('password');
  const handleEmailChange = e => setEmail(e.currentTarget.value);

  const login = useCallback(() => {
    dispatch(authOperations.registration({ email, password }));
  }, [dispatch, email, password]);

  const handlePasswordChange = e => setPassword(e.currentTarget.value);
  const handleSubmit = e => {
    e.preventDefault();
    login();
  };

  const showPassTougle = () => {
    if (eyepass === 'text') {
      setEyePass('password');
    } else {
      setEyePass('text');
    }
  };

  return (
    <>
      <div className={styles.RegistrationLogo}>
        <div className={styles.RegistrationLogoSvg}>
          <div className={styles.RegistrationLogoPng}>
            <Svg />
          </div>
        </div>
        <Logo />
      </div>
      <p className={styles.RegistrationHi}>Добро пожаловать!</p>
      <p className={styles.RegistrationTxt}>
        Введите свои данные, чтобы продолжить использовать наше приложение
      </p>
      <form onSubmit={handleSubmit} className={styles.RegistrationForm}>
        <div className={styles.RegistrationInputForm}>
          <p className={styles.RegistrationInputTxt}>E-mail</p>
          <input
            className={styles.RegistrationInput}
            value={email}
            onChange={e => handleEmailChange(e)}
            type="email"
            placeholder="Введите свой E-mail"
            name="email"
          />
        </div>
        <div className={styles.RegistrationInputForm}>
          <p className={styles.RegistrationInputTxt}>Пароль</p>
          <label className={styles.RegistrationPassword}>
            <div
              onClick={showPassTougle}
              className={styles.RegistrationPasswordBtn}
            >
              {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
            </div>

            <input
              className={styles.RegistrationInput}
              value={password}
              onChange={e => handlePasswordChange(e)}
              type="password"
              placeholder="Придумайте пароль"
              name="password"
            />
          </label>
        </div>
        <div className={styles.RegistrationButtonBlock}>
          <button className={styles.RegistrationButton}>
            <p className={styles.RegistrationButtonTxt}>Регистрация</p>
          </button>
        </div>
      </form>
      <div className={styles.RegistrationButtonBlock}>
        <button className={styles.RegistrationButton}>
          <p className={styles.RegistrationButtonTxt}>Войти</p>
        </button>
      </div>
    </>

    // <form onSubmit={handleSubmit}>
    //   <h1>RegisterView</h1>
    //   <label>
    //     Email{' '}
    //     <input
    //       onChange={handleEmailChange}
    //       name="email"
    //       value={email}
    //       type="email"
    //       placeholder="Email"
    //       required
    //     />
    //   </label>
    //   <label>
    //     Password{' '}
    //     <input
    //       onChange={handlePasswordChange}
    //       name="password"
    //       value={password}
    //       type="password"
    //       placeholder="Password"
    //       required
    //     />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
}
