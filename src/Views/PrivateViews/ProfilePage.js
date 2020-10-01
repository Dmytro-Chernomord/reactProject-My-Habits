import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, Route, Switch } from 'react-router-dom';
import Button from '../../components/Button/Button';
import avatar4 from '../../images/avatars/avatar4.png';
import styles from './ProfilePage.module.css';
import AvatarView from './AvatarView';
import Header from '../../components/Header/Header';

export default function ProfilePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const { user } = useSelector(state => state);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPhone(user.phone);
    setEmail(user.email);
  }, [user.email, user.firstName, user.lastName, user.phone]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Header title="Личный кабинет"></Header>
      <div className={styles.containerProfile}>
        <h2 className={styles.titleProfile}>Личная информация</h2>
        <div className={styles.boxInfoProfile}>
          <div>
            <form onSubmit={handleSubmit} className={styles.formProfile}>
              <label className={styles.label}>
                <span className={styles.textLabel}>Имя</span>
                <input
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={({ target: { value } }) => setFirstName(value)}
                  className={styles.input}
                />
              </label>
              <label className={styles.label}>
                <span className={styles.textLabel}>Фамилия</span>
                <input
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={({ target: { value } }) => setLastName(value)}
                  className={styles.input}
                />
              </label>
              <label className={styles.label}>
                <span className={styles.textLabel}>Телефон</span>
                <input
                  type="tel"
                  value={phone}
                  name="phone"
                  placeholder="380 _ _  _ _ _  _ _  _ _"
                  onChange={({ target: { value } }) => setPhone(value)}
                  className={styles.input}
                />
              </label>
              <label className={styles.label}>
                <span className={styles.textLabel}>E-mail</span>
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={({ target: { value } }) => setEmail(value)}
                  className={styles.input}
                />
              </label>
              <button type="submit">Изменить</button>
            </form>

            <button type="button">Изменить пароль</button>
            {/* <div>
            <form onSubmit={handleSubmit}>
              <label className={styles.label}>
                <span className={styles.textLabel}>Пароль</span>
                <input
                  type="password"
                  value={password}
                  name="password"
                  onChange={({ target: { value } }) => setPassword(value)}
                  className={styles.input}
                  required
                />
              </label>
              <label className={styles.label}>
                <span className={styles.textLabel}>Повторите пароль</span>
                <input
                  type="password"
                  value={confirmPassword}
                  name="confirmPassword"
                  onChange={({ target: { value } }) =>
                    setConfirmPassword(value)
                  }
                  className={styles.input}
                  required
                />
              </label>
              <button type="submit">Изменить пароль</button>
            </form>
          </div> */}
          </div>

          <div className={styles.boxAvatar}>
            <img src={avatar4} alt="avatar" width="108" height="108" />

            <NavLink exact to="/avatars" className={styles.linkPageAvatars}>
              Выбрать другой аватар
            </NavLink>

            <Route exact path="/avatars" component={AvatarView} />

            <p className={styles.typeSubscription}>Basic</p>
            <Button variety={'white'} text="Изменить подписку" />
          </div>
        </div>
      </div>
    </>
  );
}
