import React, { Component, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFound from '../components/NotFound/NotFound';
import userOperation from '../redux/user/userOperation';
import Error from '../components/Error/Error';

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetOwnHabits();
  // }

  render() {
    return (
      <BrowserRouter>
        {this.props.error && <Error />}
        <Suspense fallback={<h1>Loading</h1>}>
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
const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, {
  onGetOwnHabits: userOperation.getOwnHabits,
})(App);
