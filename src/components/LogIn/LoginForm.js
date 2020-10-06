import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import authOperations from '../../redux/auth/authOperation';
import styles from './Login.module.css';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';
import { CSSTransition } from 'react-transition-group';
import fadeStyle from '../../Views/PrivateViews/ProfilePage/FadeProfilePage.module.css';
import NotificationLogin from '../notifications/NotificationLogin';

export default function LoginForm({
  rightchangeModal,
  banNotification,
  setBanNotification,
}) {
  const dispatch = useDispatch();
  const errorsState = useSelector(state => state.error);

  const [eyepass, setEyePass] = useState('password');
  const [showError, setShowError] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (banNotification === false) {
      if (errorsState === true) {
        setShowNotification(true);
      }
    }
  }, [banNotification, errorsState]);

  const onSubmit = data => {
    dispatch(authOperations.logIn({ ...data }));
    setShowNotification(false);
    setBanNotification(false);
  };
  const showPassToggle = () => {
    if (eyepass === 'text') {
      setEyePass('password');
    } else {
      setEyePass('text');
    }
  };

  const onClickClose = () => {
    setBanNotification(true);
    setShowNotification(false);
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
      <div className={styles.boxError}>
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.error}>*oбязательное поле ввода</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.LoginForm}>
        <div className={styles.LoginInputForm}>
          <p className={styles.LoginInputTxt}>E-mail</p>
          <input
            className={styles.LoginInput}
            placeholder="Введите свой E-mail"
            name="email"
            type="email"
            style={{
              outlineColor: errors.email ? '#fe6083' : '#43d190',
              borderColor: errors.email ? '#fe6083' : '#e0e0e0',
            }}
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/i,
                message: '*e-mail не валидный, пример: email@mail.com',
              },
            })}
          />
        </div>
        <div className={styles.boxErrorPass}>
          {errors.password && errors.password.type === 'minLength' && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
          {errors.password && errors.password.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <div className={styles.LoginInputForm}>
          <p className={styles.LoginInputTxt}>Пароль</p>
          <label className={styles.LoginPassword}>
            <div onClick={showPassToggle} className={styles.LoginPasswordBtn}>
              {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
            </div>

            <input
              className={styles.LoginInput}
              placeholder="Введите пароль"
              name="password"
              type={eyepass}
              style={{
                outlineColor: errors.password ? '#fe6083' : '#43d190',
                borderColor: errors.password ? '#fe6083' : '#e0e0e0',
              }}
              ref={register({
                pattern: {
                  value: /[A-Za-z0-9]$/i,
                  message:
                    '*пароль может содержать только латинские буквы и/или цифры, он не должен содержать пробелы и знаки препинания',
                },
                minLength: {
                  value: 8,
                  message: '*пароль должен содержать не менее 8 символов',
                },
                maxLength: {
                  value: 16,
                  message: '*пароль может содержать не более 16 символов',
                },
                required: true,
              })}
            />
          </label>
        </div>

        <div className={styles.boxErrorMessage}>
          <CSSTransition
            in={showNotification}
            classNames={fadeStyle}
            timeout={250}
            unmountOnExit
          >
            <NotificationLogin
              setShowError={setShowError}
              showError={showError}
              onClickClose={onClickClose}
              text={
                '*неверный e-mail или пароль, введите другой E-mail или зарегистрируйтесь.'
              }
              textPort="E-mail правильный..."
            />
          </CSSTransition>
        </div>

        <div className={styles.LoginButtonBlock}>
          <button className={styles.LoginButton}>
            <p className={styles.LoginButtonTxt}>Войти</p>
          </button>
        </div>
      </form>

      <div className={styles.LoginButtonBlock}>
        <button
          onClick={() => {
            rightchangeModal();
            setShowNotification(false);
          }}
          className={styles.LoginButton}
        >
          <p className={styles.LoginButtonTxt}>Регистрация</p>
        </button>
      </div>
    </>
  );
}
