import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import authOperations from '../../redux/auth/authOperation';
import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    dispatch(authOperations.logIn({ ...data }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div className={styles.boxError}>
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.error}>*oбязательное поле ввода</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <label>
        Email{' '}
        <input
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
      </label>
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
      <label>
        Password
        <input
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
      <button type="submit">Log in</button>
    </form>
  );
}
