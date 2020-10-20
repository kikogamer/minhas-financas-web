import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Page404 from './pages/404';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro" exact component={SignUp} />
    <Route path="*" component={Page404} />
  </Switch>
);

export default Routes;
