import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../auth/authSelector';

// const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuth ? <Component {...props} /> : <Redirect to="/login" />
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuth: authSelectors.isAuth(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);

// const PrivateRoute = ({ component: Component, ...routeProps }) => (
//   <>
//     <div>User</div>
//     <Route
//       {...routeProps}
//       render={props => <Component {...props} />
//       }
//     />
//     <div>Calendar</div>
//   </>
// );

// const mapStateToProps = state => ({
//   isAuth: authSelectors.isAuth(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
