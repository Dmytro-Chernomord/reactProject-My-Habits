import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
import TempBut from '../components/TempBut';
import NotificationsPage from '../components/NotificationsPage/NotificationsPage';
import Achievements from '../Views/PrivateViews/Achievements';
import CheckListPage from '../components/CheckListPage/CheckListPage';
import userOperation from '../redux/user/userOperation';
import setToken from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import MainPrivateView from '../Views/PrivateViews/MainPrivateView';
import LeftSideBarView from './LeftSideBarView';
import ProfilePage from './PrivateViews/ProfilePage';
import Subscriptions from './PrivateViews/SubscriptionsViews/Subscriptions';

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
        <h2>Это домашняя страница залогиненного пользователя</h2>
        <div style={styles}>
          <div style={styles.box}>
            <LeftSideBarView match={match} onLogOut={this.props.onLogOut} />
            <li>
              <Link to={`${match.url}/Subscriptions`}>SubscriptionsPage</Link>
            </li>
          </div>

          <div style={styles.box}>
            <header style={styles.title}>
              title <MainPrivateView />
            </header>
            <div>
              <Route path={`${match.path}`} exact component={CheckListPage} />
              <Route
                path={`${match.path}/NotificationsPage`}
                component={NotificationsPage}
              />
              <Route
                path={`${match.path}/ProfilePage`}
                component={ProfilePage}
              />
              <Route
                path={`${match.path}/Achievments`}
                component={Achievements}
              />{' '}
              <Route
                path={`${match.path}/Subscriptions`}
                component={Subscriptions}
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
