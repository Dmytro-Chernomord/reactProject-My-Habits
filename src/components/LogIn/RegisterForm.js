import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authOperations from '../../redux/auth/authOperation';
import styles from './rightModal.module.css';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [eyepass, setEyePass] = useState('password');

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    dispatch(authOperations.registration({ ...data }));
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.RegistrationForm}
      >
        <div>
          {errors.email && errors.email.type === 'required' && (
            <p>*oбязательное поле ввода</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.RegistrationInputForm}>
          <p className={styles.RegistrationInputTxt}>E-mail</p>
          <input
            className={styles.RegistrationInput}
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
        <div>
          {errors.password && errors.password.type === 'minLength' && (
            <p>{errors.password.message}</p>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <p>{errors.password.message}</p>
          )}
          {errors.password && errors.password.type === 'required' && (
            <p>*oбязательное поле ввода</p>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <p>{errors.password.message}</p>
          )}
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
              placeholder="Придумайте пароль"
              name="password"
              type="password"
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
  );
}
