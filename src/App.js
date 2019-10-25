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
import { GroupAction } from './pages/group-action/group-action';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/group-action" exact={true} component={GroupAction} />
          <Redirect from="/" to="/login" exact={true} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
