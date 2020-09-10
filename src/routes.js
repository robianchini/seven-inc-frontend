import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      ) : (
          <Component {...props} />
        )
    }
  />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;