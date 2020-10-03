import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import userSelector from '../../redux/user/userSelector';
import userOperation from '../../redux/user/userOperation';
import styles from './ProfileForm.module.css';
import Button from '../Button/Button';

const ProfileForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

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
  }, [user.email, user.firstName, user.lastName, user.phone]);

  const onSubmit = data => {
    dispatch(userOperation.addUserInfo({ ...data }));
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
          style={{ outlineColor: errors.firstName ? '#fe6083' : '#43d190' }}
          ref={register({
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]$/i,
              message: 'Имя должно содержать только буквы',
            },
            minLength: {
              value: 2,
              message: 'Имя должно иметь не менее двух значений',
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
          style={{ outlineColor: errors.lastName ? '#fe6083' : '#43d190' }}
          ref={register({
            pattern: {
              value: /[A-Za-zА-Яа-яЁё]$/i,
              message: 'Фамилия должна содержать только буквы',
            },
            minLength: {
              value: 2,
              message: 'Фамилия должно иметь не менее двух значений',
            },
          })}
        />
      </label>
      {/* //----------------------------------------------------------------phone */}
      <div className={styles.boxError}>
        {errors.phone && errors.phone.type === 'pattern' && (
          <p className={styles.error}>{errors.phone.message}</p>
        )}
        {errors.phone && errors.phone.type === 'minLength' && (
          <p className={styles.error}>{errors.phone.message}</p>
        )}
        {errors.phone && errors.phone.type === 'maxLength' && (
          <p className={styles.error}>{errors.phone.message}</p>
        )}
      </div>
      <label className={styles.label}>
        <span className={styles.textLabel}>Телефон</span>
        <input
          type="tel"
          defaultValue={phone}
          name="phone"
          className={styles.input}
          style={{ outlineColor: errors.phone ? '#fe6083' : '#43d190' }}
          ref={register({
            pattern: {
              value: /[0-9]$/i,
              message: 'Телефон должен содержать только цифры',
            },
            minLength: {
              value: 11,
              message: 'Телефон должен иметь 12 символов',
            },
            maxLength: {
              value: 11,
              message: 'Телефон должен иметь 12 символов',
            },
          })}
        />
      </label>
      {/* //------------------------------------------------------------mail */}
      <div className={styles.boxError}>
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.error}>Обязательное поле</p>
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
          style={{ outlineColor: errors.email ? '#fe6083' : '#43d190' }}
          ref={register({
            required: true,
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/i,
              message: 'E-mail не валидный, пример: email@mail.com',
            },
          })}
        />
      </label>
      <Button variety={'white'} text="Изменить" />
    </form>
  );
};
export default ProfileForm;

//    <form onSubmit={handleSubmit} className={styles.formProfile}>
//   <label className={styles.label}>
//     <span className={styles.textLabel}>Имя</span>
//     <input
//       pattern="[A-Za-zА-Яа-яЁё]{2,}"
//       type="text"
//       value={firstName}
//       name="firstName"
//       onChange={({ target: { value } }) => setFirstName(value)}
//       className={styles.inputName}
//       placeholder="name"
//     />
//   </label>
//   <label className={styles.label}>
//     <span className={styles.textLabel}>Фамилия</span>
//     <input
//       type="text"
//       value={lastName}
//       name="lastName"
//       onChange={({ target: { value } }) => setLastName(value)}
//       className={styles.input}
//     />
//   </label>
//   <label className={styles.label}>
//     <span className={styles.textLabel}>Телефон</span>
//     <input
//       type="tel"
//       value={phone}
//       name="phone"
//       placeholder="380 _ _  _ _ _  _ _  _ _"
//       onChange={({ target: { value } }) => setPhone(value)}
//       className={styles.input}
//     />
//   </label>
//   <label className={styles.label}>
//     <span className={styles.textLabel}>E-mail</span>
//     <input
//       type="email"
//       value={email}
//       name="email"
//       onChange={({ target: { value } }) => setEmail(value)}
//       className={styles.input}
//     />
//   </label>
//   <Button variety={'white'} text="Изменить" />
// </form>;
