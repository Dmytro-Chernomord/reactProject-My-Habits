import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import styles from './ProfilePage.module.css';
import AvatarView from '../AvatarView/AvatarView';
import Header from '../../../components/Header/Header';
import userOperation from '../../../redux/user/userOperation';
import AvatarUser from '../../../components/AvatarUser/AvatarUser';
import userSelector from '../../../redux/user/userSelector';
import Subscriptions from '../SubscriptionsViews/Subscriptions';

function ProfilePage({ match, location }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showAvatars, setShowAvatars] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const user = userSelector.getUser(state);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setPhone(user.phone);
    setEmail(user.email);
  }, [user.email, user.firstName, user.lastName, user.phone]);

  useEffect(() => {
    if (location.pathname === '/home/ProfilePage/avatars') {
      setShowAvatars(true);
    } else if (location.pathname === '/home/ProfilePage/Subscriptions') {
      setShowSubscriptions(true);
    } else {
      setShowAvatars(false);
      setShowSubscriptions(false);
    }
  }, [location.pathname]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      userOperation.addUserInfo({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      }),
    );
  };

  const handlePasswordSubmit = event => {
    event.preventDefault();
    dispatch(
      userOperation.changePassword({
        password: password,
        confirmPassword: confirmPassword,
      }),
    );
  };
  return (
    <>
      {showSubscriptions ? (
        <Route path={`${match.path}/Subscriptions`} component={Subscriptions} />
      ) : (
        <>
          {showAvatars ? (
            <Route path={`${match.path}/avatars`} component={AvatarView} />
          ) : (
            <>
              <Header title="Личный кабинет"></Header>
              <div className={styles.containerProfile}>
                <h2 className={styles.titleProfile}>Личная информация</h2>
                <div className={styles.boxInfoProfile}>
                  <div>
                    <form
                      onSubmit={handleSubmit}
                      className={styles.formProfile}
                    >
                      <label className={styles.label}>
                        <span className={styles.textLabel}>Имя</span>
                        <input
                          type="text"
                          value={firstName}
                          name="firstName"
                          onChange={({ target: { value } }) =>
                            setFirstName(value)
                          }
                          className={styles.input}
                        />
                      </label>
                      <label className={styles.label}>
                        <span className={styles.textLabel}>Фамилия</span>
                        <input
                          type="text"
                          value={lastName}
                          name="lastName"
                          onChange={({ target: { value } }) =>
                            setLastName(value)
                          }
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
                    <div>
                      <form onSubmit={handlePasswordSubmit}>
                        <label className={styles.label}>
                          <span className={styles.textLabel}>Пароль</span>
                          <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={({ target: { value } }) =>
                              setPassword(value)
                            }
                            className={styles.input}
                            required
                          />
                        </label>
                        <label className={styles.label}>
                          <span className={styles.textLabel}>
                            Повторите пароль
                          </span>
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
                    </div>
                  </div>

                  <div className={styles.boxAvatar}>
                    <AvatarUser width="108" />

                    <NavLink
                      to={`${match.url}/avatars`}
                      className={styles.linkPageAvatars}
                      onClick={() => setShowAvatars(true)}
                    >
                      Выбрать другой аватар
                    </NavLink>

                    <p className={styles.typeSubscription}>Basic</p>
                    <NavLink
                      to={`${match.url}/Subscriptions`}
                      onClick={() => setShowSubscriptions(true)}
                    >
                      <Button variety={'white'} text="Изменить подписку" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default withRouter(ProfilePage);
