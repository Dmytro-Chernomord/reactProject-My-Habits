import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
import TempBut from '../components/TempBut';
import NotificationsPage from '../components/NotificationsPage/NotificationsPage';
import AchievementsPage from '../components/AchievementsPage/AchievementsPage';
import CheckListPage from '../components/CheckListPage/CheckListPage';
import userOperation from '../redux/user/userOperation';
import setToken from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import MainPrivateView from '../Views/PrivateViews/MainPrivateView';

const styles = {
  display: 'flex',
  box: { outline: '1px solid teal' },
  title: { backgroundColor: 'gray' },
};

class HomeView extends Component {
  componentDidMount() {
    console.log(this.props.token);
    setToken.setToken(this.props.token);
    this.props.onGetOwnHabits();
  }
  render() {
    const { match } = this.props;
    return (
      <>
        <h2>Это домашняя страница за логиненого пользователя</h2>
        <div style={styles}>
          <div style={styles.box}>
            LeftSideBar
            <ul>
              <li>
                <Link to={`${match.url}/NotificationsPage`}>
                  NotificationsPage
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/AchievementsPage`}>
                  AchievementsPage
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/CheckListPage`}>CheckListPage</Link>
              </li>
            </ul>
            <TempBut onClick={this.props.onLogOut}>Log Out</TempBut>
          </div>

          <div style={styles.box}>
            <header style={styles.title}>
              title <MainPrivateView />
            </header>
            <div>
              <Route
                path={`${match.path}/CheckListPage`}
                component={CheckListPage}
              />
              <Route
                path={`${match.path}/NotificationsPage`}
                component={NotificationsPage}
              />
              <Route
                path={`${match.path}/AchievementsPage`}
                component={AchievementsPage}
              />
            </div>
          </div>
          <div style={styles.box}>RightSideBar</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: authSelector.isAuthenticated(state),
});

export default connect(mapStateToProps, {
  onLogOut: authOperation.logOut,
  onGetOwnHabits: userOperation.getOwnHabits,
})(HomeView);
