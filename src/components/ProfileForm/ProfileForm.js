import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import userSelector from '../../redux/user/userSelector';
import userOperation from '../../redux/user/userOperation';
import styles from './ProfileForm.module.css';
import Button from '../Button/Button';

const ProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = userSelector.getUser(state);

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPhone(user.phone);
    setEmail(user.email);
    setShowMessage(false);
  }, [user.email, user.firstName, user.lastName, user.phone]);

  useEffect(() => {
    if (user.error === true) {
      setShowMessage(false);
    }
  }, [user.error]);

  const handlePhoneChange = ({ target: { value } }) => {
    if (value.split('_').length !== 1) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
    if (value.split('_').length === 9) {
      setErrorPhone(false);
    }
    setPhone(value);
  };

  const onSubmit = data => {
    const phoneUser = phone.slice(1, 17).split('-').join('');
    console.log(phoneUser);
    if (errorPhone) {
      return;
    }
    dispatch(
      userOperation.addUserInfo({
        ...data,
        phone: phoneUser,
      }),
    );

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formProfile}>
      {/* //-----------------------------------------------------------------Name */}
      <div className={styles.boxError}>
        {errors.firstName && errors.firstName.type === 'minLength' && (
          <p className={styles.error}>{errors.firstName.message}</p>
        )}
        {errors.firstName && errors.firstName.type === 'pattern' && (
          <p className={styles.error}>{errors.firstName.message}</p>
        )}
      </div>
      <label className={styles.label}>
        <span className={styles.textLabel}>Имя</span>
        <input
          type="text"
          defaultValue={firstName}
          name="firstName"
          className={styles.input}
          style={{
            outlineColor: errors.firstName ? '#fe6083' : '#43d190',
            borderColor: errors.firstName ? '#fe6083' : '#e0e0e0',
          }}
          ref={register({
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]$/i,
              message: '*имя должно содержать только буквы',
            },
            minLength: {
              value: 2,
              message: '*имя должно содержать не менее двух значений',
            },
          })}
        />
      </label>
      {/* //--------------------------------------------------------------------------Фамилия */}
      <div className={styles.boxError}>
        {errors.lastName && errors.lastName.type === 'minLength' && (
          <p className={styles.error}>{errors.lastName.message}</p>
        )}
        {errors.lastName && errors.lastName.type === 'pattern' && (
          <p className={styles.error}>{errors.lastName.message}</p>
        )}
      </div>
      <label className={styles.label}>
        <span className={styles.textLabel}>Фамилия</span>
        <input
          type="text"
          defaultValue={lastName}
          name="lastName"
          className={styles.input}
          style={{
            outlineColor: errors.lastName ? '#fe6083' : '#43d190',
            borderColor: errors.lastName ? '#fe6083' : '#e0e0e0',
          }}
          ref={register({
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]$/i,
              message: '*фамилия должна содержать только буквы',
            },
            minLength: {
              value: 2,
              message: '*фамилия должна содержать не менее двух значений',
            },
          })}
        />
      </label>
      {/* //----------------------------------------------------------------phone */}
      <div className={styles.boxError}>
        {errorPhone && (
          <p className={styles.error}>*вы ввели не валидный номер</p>
        )}
      </div>
      <label className={styles.label}>
        <span className={styles.textLabel}>Телефон</span>
        <InputMask
          mask="+38-099-99-99-99"
          type="tel"
          value={phone}
          name="phone"
          onChange={handlePhoneChange}
          className={styles.input}
          style={{
            outlineColor: errorPhone ? '#fe6083' : '#43d190',
            borderColor: errorPhone ? '#fe6083' : '#e0e0e0',
          }}
        />
      </label>
      {/* //------------------------------------------------------------mail */}
      <div className={styles.boxError}>
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.error}>*обязательное поле ввода</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className={styles.error}>{errors.email.message}</p>
        )}
      </div>
      <label className={styles.label}>
        <span className={styles.textLabel}>E-mail</span>
        <input
          type="email"
          defaultValue={email}
          name="email"
          className={styles.input}
          style={{
            outlineColor: errors.email ? '#fe6083' : '#43d190',
            borderColor: errors.email ? '#fe6083' : '#e0e0e0',
          }}
          ref={register({
            required: true,
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/i,
              message: '*е-mail не валидный, пример: email@mail.com',
            },
          })}
        />
      </label>
      <div className={styles.boxMessage}>
        {showMessage && (
          <span className={styles.validText}>Данные изменены!</span>
        )}
        {state.error && (
          <p className={styles.error}>
            *извините, произошла ошибка,данные не изменены, попробуйте позже
          </p>
        )}
      </div>

      <Button variety={'white'} text="Изменить" />
    </form>
  );
};
export default ProfileForm;
