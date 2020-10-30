import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DropDownMenuContainer from './styles';
import DropDownContext from '../../../../contexts/DropDownContext';

const DropDownMenu = ({ children }) => {
  const { isOpen } = useContext(DropDownContext);

  return (
    <DropDownMenuContainer isOpen={isOpen}>
      {children}
    </DropDownMenuContainer>
  );
};

DropDownMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropDownMenu;
