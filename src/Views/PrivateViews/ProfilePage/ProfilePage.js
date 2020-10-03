import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Route, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './ProfilePage.module.css';
import fadePasswordStyle from './FadeProfilePage.module.css';
import Button from '../../../components/Button/Button';
import AvatarView from '../AvatarView/AvatarView';
import Header from '../../../components/Header/Header';
import AvatarUser from '../../../components/AvatarUser/AvatarUser';
import userSelector from '../../../redux/user/userSelector';
import Subscriptions from '../SubscriptionsViews/Subscriptions';
import ChangePassword from '../../../components/ChangePassword/ChangePassword';
import ProfileForm from '../../../components/ProfileForm/ProfileForm';

function ProfilePage({ match, location, toggleModal, changeLayout }) {
  const [showAvatars, setShowAvatars] = useState(false);
  const [showSubscriptions, setShowSubscriptions] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const state = useSelector(state => state);
  const subscription = userSelector.getSubscription(state);

  useEffect(() => {
    if (location.pathname === '/home/ProfilePage/avatars') {
      setShowPassword(false);
      setShowAvatars(true);
    } else if (location.pathname === '/home/ProfilePage/Subscriptions') {
      setShowPassword(false);
      setShowSubscriptions(true);
    } else {
      setShowAvatars(false);
      setShowSubscriptions(false);
    }
  }, [location.pathname]);

  return (
    <>
      {showSubscriptions ? (
        <Route
          exact
          path={`${match.path}/Subscriptions`}
          component={Subscriptions}
        />
      ) : (
        <>
          {showAvatars ? (
            <Route
              exact
              path={`${match.path}/avatars`}
              render={() => (
                <AvatarView
                  toggleModal={toggleModal}
                  changeLayout={changeLayout}
                />
              )}
            />
          ) : (
            <>
              <Header title="Личный кабинет"></Header>
              <div className={styles.containerProfile}>
                <h2 className={styles.titleProfile}>Личная информация</h2>
                <div className={styles.boxInfoProfile}>
                  <div>
                    <ProfileForm />

                    <div className={styles.boxPassword}>
                      <button
                        type="button"
                        className={styles.btnPassword}
                        onClick={() => setShowPassword(prev => !prev)}
                      >
                        Изменить пароль
                      </button>
                      <CSSTransition
                        in={showPassword}
                        classNames={fadePasswordStyle}
                        timeout={250}
                        unmountOnExit
                      >
                        <ChangePassword setShowPassword={setShowPassword} />
                      </CSSTransition>
                    </div>
                  </div>

                  <div className={styles.boxAvatar}>
                    <AvatarUser width="108" />

                    <NavLink
                      exact
                      to={`${match.url}/avatars`}
                      className={styles.linkPageAvatars}
                      onClick={() => setShowAvatars(true)}
                    >
                      Выбрать другой аватар
                    </NavLink>

                    {subscription === '' ? (
                      <p className={styles.typeSubscription}>Basic</p>
                    ) : (
                      <p className={styles.typeSubscription}>{subscription}</p>
                    )}

                    <NavLink
                      exact
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
