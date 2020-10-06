import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import userOperation from '../redux/user/userOperation';
import Error from '../components/Error/Error';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';
import Layout from '../components/Layout/Layout';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetOwnHabits();
  // }

  render() {
    return (
      <Layout>
        <BrowserRouter>
          {this.props.error && <Error />}
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
const mapStateToProps = state => ({
  error: state.error,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, {
  onGetOwnHabits: userOperation.getOwnHabits,
})(App);
