import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import authOperations from '../../redux/auth/authOperation';
import styles from './rightModal.module.css';
import { ReactComponent as Logo } from '../../images/homepage/svg/MakeitHabitblack.svg';
import { ReactComponent as Svg } from '../../images/homepage/svg/Subtract.svg';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';
import fadeStyle from '../../Views/PrivateViews/ProfilePage/FadeProfilePage.module.css';

export default function RegisterForm({ changeModal }) {
  const dispatch = useDispatch();
  const errorsState = useSelector(state => state.error);

  const [eyepass, setEyePass] = useState('password');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    setEmail(data.email);
    dispatch(authOperations.registration({ ...data }));
  };

  const showPassToggle = () => {
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
        <div className={styles.boxError}>
          {errors.email && errors.email.type === 'required' && (
            <p className={styles.error}>*oбязательное поле ввода</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className={styles.error}>{errors.email.message}</p>
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
        <div className={styles.RegistrationInputForm}>
          <p className={styles.RegistrationInputTxt}>Пароль</p>
          <label className={styles.RegistrationPassword}>
            <div
              onClick={showPassToggle}
              className={styles.RegistrationPasswordBtn}
            >
              {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
            </div>

            <input
              className={styles.RegistrationInput}
              placeholder="Придумайте пароль"
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
          {errorsState && (
            <p className={styles.error}>
              *пользователь {email} уже существует, введите другой E-mail или
              войдите.
              <button
                className={styles.btnError}
                onClick={() => setShowError(prev => !prev)}
              >
                E-mail не зарегистрирован...
              </button>
            </p>
          )}
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
        <div className={styles.RegistrationButtonBlock}>
          <button className={styles.RegistrationButton}>
            <p className={styles.RegistrationButtonTxt}>Регистрация</p>
          </button>
        </div>
      </form>
      <div className={styles.RegistrationButtonBlock}>
        <button className={styles.RegistrationButton}>
          <p onClick={changeModal} className={styles.RegistrationButtonTxt}>
            Войти
          </p>
        </button>
      </div>
    </>
  );
}
