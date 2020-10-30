import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DropDownContext from '../../../../contexts/DropDownContext';
import DropDownToggleContainer from './styles';

const DropDownToggle = ({ children }) => {
  const { hide, isOpen, show } = useContext(DropDownContext);

  const handleClick = () => (isOpen ? hide() : show());

  return (
    <DropDownToggleContainer onClick={handleClick}>
      {children}
    </DropDownToggleContainer>
  );
};

DropDownToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropDownToggle;
