import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Login } from './pages/login/login';
import { GroupAction } from './pages/group-action/group-action';
import { Challenge } from './pages/challenge/challenge';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/group-action" exact={true} component={GroupAction} />
          <Route path="/challenge" exact={true} component={Challenge} />
          <Redirect from="/" to="/login" exact={true} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
