import React, { useEffect } from 'react';
import { Route, Link, useLocation, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
// import TempBut from '../components/TempBut';
import Notifications from './PrivateViews/NotificationsView';
import Achievements from '../Views/PrivateViews/Achievements';
import CheckListPage from '../components/CheckListPage/CheckListPage';
import userOperation from '../redux/user/userOperation';
// import setToken from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import MainPrivateView from '../Views/PrivateViews/MainPrivateView';
import ProfilePage from './PrivateViews/ProfilePage/ProfilePage';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import LeftSideBarView from './LeftSideBarView';
import Subscriptions from './PrivateViews/SubscriptionsViews/Subscriptions';
import ModalBackdrop from '../components/Modal/Modal';
import ModalContent from '../components/ModalContent/ModalContent';
import InterviewModal from '../redux/quiz/modalQuiztest';
import toggle from '../redux/modal/modalOperation';
import modalSelector from '../redux/modal/modalSelector';
import quizSelector from '../redux/quiz/quizSelector';
// import NotFound from '../components/NotFound/NotFound';
import Layout from '../components/Layout/Layout';
import habitsSelector from '../redux/habits/habitsSelector';
import operation from '../redux/user/userOperation';
import userSelector from '../redux/user/userSelector';
import notificationsActions from '../redux/notifications/notificationsActions';

const HomeView = () => {
  const dispatch = useDispatch();

  let match = useRouteMatch();
  const token = useSelector(state => state.auth.token);
  const habitsData = useSelector(state => state.habits);

  const stateNotification = useSelector(state => state.notifications.count);

  const setNotification = useSelector(
    state => state.notifications.setNotification,
  );

  const habits = habitsData.map(el => el.data);

  const activeDays = habits.filter(el =>
    el.filter(elm => typeof elm === 'boolean'),
  );

  const daysLeft = habits.map(el => el.filter(elm => elm === null));
  const youHaveThreeDaysLeft = daysLeft.some(el => el.length === 3);
  const youHaveFiveDaysLeft = daysLeft.some(el => el.length === 5);
  const halfWayTrough = daysLeft.some(el => el.length === 10);
  const presentActiveDays = activeDays.filter(elm => elm.length > 0);
  const uncompletedDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const youCanDoBetter = uncompletedDays.some(el => {
    console.log(el.length);
    return el.length > 0;
  });
  const successfullDays = presentActiveDays.map(el =>
    el.filter(elm => elm === true),
  );
  const oneDayLeft = daysLeft.some(el => el.length === 1);
  const youGotAchievment = successfullDays.some(el => el.length > 20);

  const goodStart = habitsData.filter(el =>
    el.data.some(elm => {
      if (elm === true) {
        return el;
      }
      return false;
    }),
  );

  const justOneDay = [];
  const threeDaysAndDone = [];
  const fiveDaysAndDone = [];
  const halfDone = [];

  const howMuchDaysLeft = goodStart.filter(el => {
    const howMuchLeft = el.data.reduce(function (accumulator, currentValue) {
      if (typeof currentValue === 'boolean') {
        return accumulator + 1;
      } else {
        return accumulator;
      }
    }, 0);
    if (howMuchLeft === 20) {
      justOneDay.push(el);
    }
    if (howMuchLeft === 18) {
      threeDaysAndDone.push(el);
    }
    if (howMuchLeft === 16) {
      fiveDaysAndDone.push(el);
    }
    if (howMuchLeft === 11 || howMuchLeft === 10) {
      halfDone.push(el);
    }
  });
  const allDayStatistic = {
    justOneDay,
    threeDaysAndDone,
    fiveDaysAndDone,
    halfDone,
  };

  useEffect(() => {
    if (youGotAchievment && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (youCanDoBetter && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (youHaveFiveDaysLeft && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (
      youHaveThreeDaysLeft &&
      !setNotification &&
      stateNotification === null
    ) {
      dispatch(notificationsActions.addNotification());
    }
    if (oneDayLeft && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    if (halfWayTrough && !setNotification && stateNotification === null) {
      dispatch(notificationsActions.addNotification());
    }
    return () => {};
  }, [
    dispatch,
    halfWayTrough,
    oneDayLeft,
    setNotification,
    stateNotification,
    youCanDoBetter,
    youGotAchievment,
    youHaveFiveDaysLeft,
    youHaveThreeDaysLeft,
  ]);

  useEffect(() => {
    if (stateNotification === 0) {
      dispatch(notificationsActions.setNotification());
    }

    return () => {};
  }, [dispatch, stateNotification]);

  const onLogOut = () => dispatch(authOperation.logOut());
  useEffect(() => {
    authOperation.setToken(token);
    dispatch(operation.getOwnHabits());
    return () => {};
  }, [dispatch, token]);

  return (
    <>
      <Layout sections={'sides'}>
        <LeftSideBarView match={match} onLogOut={onLogOut} />
      </Layout>

      <Layout sections={'middle'}>
        <Route path={`${match.path}`} exact>
          <CheckListPage />
        </Route>
        <Route path={`${match.path}/Notifications`}>
          <Notifications
            setNotification={setNotification}
            stateNotification={stateNotification}
            oneDayLeft={oneDayLeft}
            youHaveThreeDaysLeft={youHaveThreeDaysLeft}
            halfWayTrough={halfWayTrough}
            youHaveFiveDaysLeft={youHaveFiveDaysLeft}
            youCanDoBetter={youCanDoBetter}
            youGotAchievment={youGotAchievment}
            goodStart={goodStart}
            allDayStatistic={allDayStatistic}
          />
        </Route>
        <Route path={`${match.path}/ProfilePage`}>
          <ProfilePage />
        </Route>
        <Route path={`${match.path}/Achievments`} component={Achievements} />{' '}
        <Route path={`${match.path}/Subscriptions`} component={Subscriptions} />
      </Layout>
      <Layout sections={'sides'}>
        <RightSideBar />
      </Layout>
    </>
  );
};

export default HomeView;
