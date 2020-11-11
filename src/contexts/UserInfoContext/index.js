import React from 'react';

const UserInfoContext = React.createContext({
  isLoggedIn: false,
  userInfo: {},
});

export default UserInfoContext;
