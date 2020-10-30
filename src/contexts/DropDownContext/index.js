import React from 'react';

const DropDownContext = React.createContext({
  hide: () => {},
  isOpen: false,
  show: () => {},
});

export default DropDownContext;
