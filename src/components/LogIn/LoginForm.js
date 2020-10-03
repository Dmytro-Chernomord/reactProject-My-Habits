import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperation';
import styles from './Login.module.css';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyepass, setEyePass] = useState('password');
  const handleEmailChange = e => setEmail(e.currentTarget.value);

  const login = useCallback(() => {
    dispatch(authOperations.logIn({ email, password }));
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
      <div className={styles.HomeLogo}>
        <div className={styles.HomeLogoSvg}>
          <div className={styles.HomeLogoPng}>
            <Svg />
          </div>
        </div>
        <Logo />
      </div>
      <p className={styles.LoginHi}>C возвращением!</p>
      <p className={styles.LoginTxt}>
        Введите свои данные, чтобы продолжить использовать наше приложение
      </p>

      <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <div className={styles.LoginInputForm}>
          <p className={styles.LoginInputTxt}>E-mail</p>
          <input
            className={styles.LoginInput}
            value={email}
            onChange={e => handleEmailChange(e)}
            type="email"
            placeholder="Введите свой E-mail"
            name="email"
          />
        </div>
        <div className={styles.LoginInputForm}>
          <p className={styles.LoginInputTxt}>Пароль</p>
          <label className={styles.LoginPassword}>
            <div onClick={showPassTougle} className={styles.LoginPasswordBtn}>
              {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
            </div>

            <input
              className={styles.LoginInput}
              value={password}
              onChange={e => handlePasswordChange(e)}
              type={eyepass}
              placeholder="Введите пароль"
              name="password"
            />
          </label>
        </div>
        <div className={styles.LoginButtonBlock}>
          <button className={styles.LoginButton}>
            <p className={styles.LoginButtonTxt}>Войти</p>
          </button>
        </div>
      </form>
      <div className={styles.LoginButtonBlock}>
        <button className={styles.LoginButton}>
          <p className={styles.LoginButtonTxt}>Регистрация</p>
        </button>
      </div>
    </>

    // <form onSubmit={handleSubmit}>
    //   <h1>Login</h1>
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
    //   <button type="submit">Log in</button>
    // </form>
  );
}
