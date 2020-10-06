import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import userOperation from '../redux/user/userOperation';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';
import Layout from '../components/Layout/Layout';
// import NotificationErrors from './notifications/NotificationErrors';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetOwnHabits();
  // }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          {/* <NotificationErrors /> */}
          <Suspense fallback={<CustomLoader />}>
            <Switch>
              {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Layout>
    );
  }
}

// const mapDispatchToProps = {};

export default connect(null, {
  onGetOwnHabits: userOperation.getOwnHabits,
})(App);
