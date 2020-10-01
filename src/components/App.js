import { Route, Switch, NavLink } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import routes from '../routes';
import RegisterView from '../Views/AuthViews/RegisterView';
import LoginView from '../Views/AuthViews/LoginView';
import MainView from '../Views/PrivateViews/MainPrivateView';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import authOperations from '../redux/auth/authOperation';
import userOperations from '../redux/user/userOperation';
import Button from '../components/Button/Button';
import LeftSideBarView from '../Views/LeftSideBarView';
axios.defaults.baseURL = 'https://make-it-habit-api.herokuapp.com';

const Authorization = lazy(() =>
  import(
    '../Views/AuthViews/Authorization' /* webpackChunkName: "start-view" */
  ),
);

// const userTest = {
//   email: 'testUser@gmail.com',
//   password: 'Qwerty123',
// };
// const userTest1 = {
//   email: 'testUser3@gmail.com',
//   password: 'qweqwe123',
// };
// function testFetch(userData) {
//   axios
//     .post('/auth/registration', userData)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// }
// function testLogin(userData) {
//   axios
//     .post('/auth/login', userData)
//     .then(response => console.log(response))
//     .catch(error => console.log(error));
// }

export default function App() {
  const dispatch = useDispatch();

  const user = true;
  return (
    <>
      {/* <NavLink to={routes.login}>
        <button type="button">Login</button>{' '}
      </NavLink>
      <NavLink to={routes.register}>
        <button type="button">Register</button>{' '}
      </NavLink> */}
      <NavLink to={routes.start}>
        <button type="button">Home</button>{' '}
      </NavLink>
      <button onClick={() => dispatch(authOperations.logOut())} type="button">
        logOut
      </button>
      <button
        onClick={() => dispatch(userOperations.getOwnHabits())}
        type="button"
      >
        getOwnHabits
      </button>
      <div>Вариант 1</div>
      {user && <LeftSideBar />}
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route exact path={routes.start} component={Authorization} />
          <Route path={routes.login} component={LoginView} />
          <Route path={routes.register} component={RegisterView} />
          <Route path={routes.privateMain} component={MainView} />
          {/* <Route path={routes.privateMain} component={LeftSideBarView} /> */}

          {/* <PrivateRoute exact path={routes.contacts} component={ContactView} /> */}
          {/* <PublicRoute
            path={routes.login}
            restricted={true}
            component={LoginView}
          /> */}
          {/* <PublicRoute
            path={routes.register}
            restricted={true}
            component={RegisterView}
          /> */}
          {/* <FirstRoute /> */}
        </Switch>
      </Suspense>
    </>
  );
}
