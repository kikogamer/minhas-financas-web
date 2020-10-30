import React from 'react';
import PropTypes from 'prop-types';
import DropDownItemContainer from './styles';

const DropDownItem = ({ children, divider, onClick }) => (
  <DropDownItemContainer divider={divider} onClick={onClick}>
    {children}
  </DropDownItemContainer>
);

DropDownItem.defaultProps = {
  children: null,
  divider: false,
  onClick: null,
};

DropDownItem.propTypes = {
  children: PropTypes.node,
  divider: PropTypes.bool,
  onClick: PropTypes.func,
};

export default DropDownItem;
