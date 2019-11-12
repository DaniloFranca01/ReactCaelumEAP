import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { isAuthenticated } from './Auth';

const PrivateRoute = ({ component: Component, handleLogout, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} handleLogout={handleLogout} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
  );
};

export default withRouter(PrivateRoute);