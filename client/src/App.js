import React, { useState } from 'react';
import './styles/styles.scss';
import { Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import Menu from './components/Menu';
import PrivateRoute from './PrivateRoute';
import history from './history';
import { AuthContext } from './context/';
import { ROUTES, STORAGE_NAMES } from './constants';

const App = () => {
  const sessionStorageToken = sessionStorage.getItem(STORAGE_NAMES.TOKEN);
  const [authTokens, setAuthTokens] = useState(
      sessionStorageToken === 'undefined' || sessionStorageToken === null ? '' : sessionStorageToken
  );

  const setTokens = (data) => {
    sessionStorage.setItem(STORAGE_NAMES.TOKEN, data);
    setAuthTokens(data);
  };

  return (
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
        <Router history={history}>
              <Menu/>
              <Route exact path={ROUTES.HOME} component={Home}/>
              <PrivateRoute exact path={ROUTES.MAIN} component={Main}/>
        </Router>
      </AuthContext.Provider>
  );
};

export default App;
