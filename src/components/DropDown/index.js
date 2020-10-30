import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDownContext from '../../contexts/DropDownContext';
import DropDownContainer from './styles';

const DropDown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  const value = {
    hide,
    isOpen,
    show,
  };
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <DropDownContext.Provider value={value}>
      <DropDownContainer onMouseLeave={handleMouseLeave}>
        {children}
      </DropDownContainer>
    </DropDownContext.Provider>
  );
};

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropDown;
