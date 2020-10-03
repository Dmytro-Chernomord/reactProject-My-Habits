import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/authOperation';
// import TempBut from '../components/TempBut';
import Notifications from './PrivateViews/NotificationsView';
import Achievements from '../Views/PrivateViews/Achievements';
import CheckListPage from '../components/CheckListPage/CheckListPage';
import userOperation from '../redux/user/userOperation';
import setToken from '../redux/auth/authOperation';
import authSelector from '../redux/auth/authSelector';
import MainPrivateView from '../Views/PrivateViews/MainPrivateView';
import ProfilePage from './PrivateViews/ProfilePage/ProfilePage';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';
import LeftSideBarView from './LeftSideBarView';
import Subscriptions from './PrivateViews/SubscriptionsViews/Subscriptions';
import ModalBackdrop from '../components/Modal/Modal';
import ModalContent from '../components/ModalContent/ModalContent';
import toggle from '../redux/modal/modalOperation';
import modalSelector from '../redux/modal/modalSelector';
// import NotFound from '../components/NotFound/NotFound';

const styles = {
  display: 'flex',
  box: { outline: '1px solid teal' },
  title: { backgroundColor: 'gray' },
};

class HomeView extends Component {
  state = {
    layout: 'HabitChoiceModal',
  };

  changeLayout = layout => {
    this.setState({ layout });
  };

  componentDidMount() {
    // console.log(this.props.token);
    setToken.setToken(this.props.token);
    this.props.onGetOwnHabits();
  }
  render() {
    const { match } = this.props;
    return (
      <>
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
              <Route
                path={`${match.path}`}
                exact
                // component={CheckListPage}
              >
                <CheckListPage
                  toggleModal={this.props.toggleModal}
                  changeLayout={this.changeLayout}
                />
              </Route>
              <Route
                path={`${match.path}/Notifications`}
                component={Notifications}
              />
              <Route path={`${match.path}/ProfilePage`}>
                <ProfilePage
                  toggleModal={this.props.toggleModal}
                  changeLayout={this.changeLayout}
                />
              </Route>
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
          <div style={styles.box}>
            <RightSideBar />
          </div>
        </div>
        {this.props.showModal && (
          <ModalBackdrop onClose={this.props.toggleModal}>
            <ModalContent
              onSave={this.props.toggleModal}
              layout={this.state.layout}
              // ableToDelete={isAbleToDelete}
            />
          </ModalBackdrop>
        )}
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
  toggleModal: toggle.toggleModal,
})(HomeView);
