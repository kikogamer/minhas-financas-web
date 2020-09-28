import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={() => <div>Home Page</div>} />
  </Switch>
);

export default Routes;
