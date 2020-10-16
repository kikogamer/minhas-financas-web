import React from 'react';

const LoadingContext = React.createContext({
  loading: false,
  message: null,
  showLoading: () => {},
  hideLoading: () => {},
});

export default LoadingContext;
