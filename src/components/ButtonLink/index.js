import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const ButtonLink = ({ to, children, large }) => (
  <Link to={to}>
    <Button type="button" large={large}>
      {children}
    </Button>
  </Link>
);

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  large: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  large: false,
};

export default ButtonLink;
