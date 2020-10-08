import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
// import TempBut from '../components/TempBut';
import Notifications from './PrivateViews/NotificationsView';
import Achievements from '../Views/PrivateViews/Achievements';
import CheckListPage from '../components/CheckListPage/CheckListPage';
import userOperation from '../redux/user/userOperation';
import setToken from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import ProfilePage from './PrivateViews/ProfilePage/ProfilePage';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import LeftSideBarView from './LeftSideBarView';
import Subscriptions from './PrivateViews/SubscriptionsViews/Subscriptions';
import modalSelector from '../redux/modal/modalSelector';
// import NotFound from '../components/NotFound/NotFound';
import Layout from '../components/Layout/Layout';

class HomeView extends Component {
  componentDidMount() {
    setToken.setToken(this.props.token);
    this.props.onGetOwnHabits();
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Layout sections={'sides'}>
          <LeftSideBarView match={match} onLogOut={this.props.onLogOut} />
        </Layout>

        <Layout sections={'middle'}>
          <Route path={`${match.path}`} exact>
            <CheckListPage />
          </Route>
          <Route
            path={`${match.path}/Notifications`}
            component={Notifications}
          />
          <Route path={`${match.path}/ProfilePage`}>
            <ProfilePage />
          </Route>
          <Route path={`${match.path}/Achievments`} component={Achievements} />{' '}
          <Route
            path={`${match.path}/Subscriptions`}
            component={Subscriptions}
          />
        </Layout>
        <Layout sections={'sides'}>
          <RightSideBar />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: authSelector.isAuthenticated(state),
  showModal: modalSelector.getModal(state),
});

export default connect(mapStateToProps, {
  onLogOut: authOperation.logOut,
  onGetOwnHabits: userOperation.getOwnHabits,
})(HomeView);
