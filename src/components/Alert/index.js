import React from 'react';
import PropTypes from 'prop-types';
import AlertContainer from './styles';

const Alert = ({ children, onClose }) => (
  <AlertContainer>
    <AlertContainer.CloseButton onClick={onClose}>
      &times;
    </AlertContainer.CloseButton>
    {children}
  </AlertContainer>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
