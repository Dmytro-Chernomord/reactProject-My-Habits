import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import userOperation from '../../redux/user/userOperation';
import Button from '../Button/Button';
import styles from './ChangePassword.module.css';
import { ReactComponent as ClosedEye } from '../../images/homepage/svg/closedEye.svg';
import { ReactComponent as OpenedEye } from '../../images/homepage/svg/openedEye.svg';
import NotificationModal from '../../components/notifications/NotificationModal';

const ChangePassword = ({ setShowPassword }) => {
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [eyepass, setEyePass] = useState('password');

  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      setShowError(true);
      return;
    }
    dispatch(userOperation.changePassword({ ...data }));
    setShowError(false);
  };

  const showPassToggle = () => {
    if (eyepass === 'text') {
      setEyePass('password');
    } else {
      setEyePass('text');
    }
    setShowMessage(true);
    setTimeout(() => {
      setShowPassword(false);
    }, 1000);
  };
  return (
    <div className={styles.boxFormPassword}>
      <form className={styles.formProfile} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.boxError}>
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
        <label className={styles.label}>
          <span className={styles.textLabel}>Пароль</span>

          <input
            type={eyepass}
            name="password"
            className={styles.input}
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
          <div onClick={showPassToggle} className={styles.LoginPasswordBtn}>
            {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
          </div>
        </label>
        <div className={styles.boxError}>
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'minLength' && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'pattern' && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'required' && (
              <p className={styles.error}>*oбязательное поле ввода</p>
            )}
          {errors.confirmPassword &&
            errors.confirmPassword.type === 'maxLength' && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
        </div>
        <label className={styles.label}>
          <span className={styles.textLabel}>Повторите пароль</span>
          <div onClick={showPassToggle} className={styles.LoginPasswordBtn}>
            {eyepass === 'text' ? <OpenedEye /> : <ClosedEye />}
          </div>
          <input
            type={eyepass}
            name="confirmPassword"
            className={styles.input}
            style={{
              outlineColor: errors.confirmPassword ? '#fe6083' : '#43d190',
              borderColor: errors.confirmPassword ? '#fe6083' : '#e0e0e0',
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
        <div className={styles.boxErrorValid}>
          {showError && (
            <span className={styles.notValidText}>Пароли не совпадают</span>
          )}
          {showMessage && (
            <span className={styles.validText}>Пароль изменён!</span>
          )}
        </div>
        {/* <div style={{ marginBottom: '5px' }}>
          <NotificationModal />
        </div> */}
        <Button variety={'white'} text="Изменить пароль" />
      </form>
    </div>
  );
};

export default ChangePassword;
