import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import LoadingContext from './contexts/LoadingContext';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const showLoading = (newMessage) => {
    setLoading(true);
    setMessage(newMessage);
  };

  const hideLoading = () => setLoading(false);

  const value = {
    loading,
    message,
    showLoading,
    hideLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      <BrowserRouter>
        <Routes />
        <Loading loading={loading} message={message} />
      </BrowserRouter>
    </LoadingContext.Provider>
  );
}

export default App;
