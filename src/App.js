import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import { Login } from './pages/login/login';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Redirect from="/" to="/login" exact={true} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
