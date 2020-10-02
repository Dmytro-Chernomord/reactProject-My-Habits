import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperation from '../../redux/user/userOperation';
import Button from '../Button/Button';
import styles from './ChangePassword.module.css';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();

  const handlePasswordSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setShowError(true);
      return;
    }
    dispatch(
      userOperation.changePassword({
        password: password,
        confirmPassword: confirmPassword,
      }),
    );
    setShowError(false);
    setShowMessage(true);
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={styles.boxFormPassword}>
      <form className={styles.formProfile} onSubmit={handlePasswordSubmit}>
        <label className={styles.label}>
          <span className={styles.textLabel}>Пароль</span>
          <input
            type="password"
            value={password}
            name="password"
            className={styles.input}
            onChange={({ target: { value } }) => setPassword(value)}
            required
          />
        </label>
        <label className={styles.label}>
          <span className={styles.textLabel}>Повторите пароль</span>
          <input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            className={styles.input}
            onChange={({ target: { value } }) => setConfirmPassword(value)}
            required
          />
        </label>
        <Button variety={'white'} text="Изменить пароль" />
        {showError && (
          <span className={styles.notValidText}>Пароли не совпадают</span>
        )}
        {showMessage && (
          <span className={styles.validText}>Пароль изменён!</span>
        )}
      </form>
    </div>
  );
};

export default ChangePassword;
