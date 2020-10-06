import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import userOperation from '../redux/user/userOperation';
import { CustomLoader } from './UIcomponents/CustomLoader/CustomLoader';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetOwnHabits();
  // }

  render() {
    return (
      <BrowserRouter>
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
    );
  }
}

// const mapDispatchToProps = {};

export default connect(null, {
  onGetOwnHabits: userOperation.getOwnHabits,
})(App);
