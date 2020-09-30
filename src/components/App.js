import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import userOperation from '../redux/user/userOperation';

class App extends Component {
  componentDidMount() {
    this.props.onGetOwnHabits();
  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetOwnHabits: userOperation.getOwnHabits,
})(App);
