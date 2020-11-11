import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import UserInfoContext from '../../contexts/UserInfoContext';

const PrivateRoute = ({ component: Component, exact, path }) => {
  const { isLoggedIn } = useContext(UserInfoContext);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isLoggedIn ? <Component /> : <Redirect to="/" />
      )}
    />
  );
};

PrivateRoute.defaultProps = {
  exact: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
