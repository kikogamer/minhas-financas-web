import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import LoadingContext from './contexts/LoadingContext';
import Loading from './components/Loading';
import { isAuthenticated } from './services/auth';
import getUserInfo from './services/user';
import UserInfoContext from './contexts/UserInfoContext';

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const isLoggedIn = isAuthenticated();

  useEffect(() => {
    if (isLoggedIn) {
      getUserInfo()
        .then((response) => setUserInfo(response));
    }
  }, [isLoggedIn]);

  const showLoading = (newMessage) => {
    setLoading(true);
    setMessage(newMessage);
  };

  const hideLoading = () => setLoading(false);

  const loadingContextValue = {
    loading,
    message,
    showLoading,
    hideLoading,
  };

  const userInfoContextValue = {
    isLoggedIn,
    userInfo,
  };

  return (
    <UserInfoContext.Provider value={userInfoContextValue}>
      <LoadingContext.Provider value={loadingContextValue}>
        <BrowserRouter>
          <Routes />
          <Loading loading={loading} message={message} />
        </BrowserRouter>
      </LoadingContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default App;
