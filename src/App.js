import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import grey from '@material-ui/core/colors/grey';

import { Login } from './pages/login/login';
import { GroupAction } from './pages/group-action/group-action';
import { Challenge } from './pages/challenge/challenge';
import { ChallengeDetail } from './pages/challenge-detail/challenge-detail';
import { ChallengeProgress } from './pages/challenge-progress/challenge-progress';

function App() {
  return (
    <HelmetProvider>
      <CssBaseline />
      <Helmet>
        <style type="text/css">
          {`
            :root {
              --grey-300: ${grey['300']};
              --grey-600: ${grey['600']};
            }
          `}
        </style>
      </Helmet>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={Login} />
          <Route path="/group-action" exact={true} component={GroupAction} />
          <Route path="/challenge" exact={true} component={Challenge} />
          <Route
            path="/challenge/no-meat"
            exact={true}
            component={ChallengeDetail}
          />
          <Route
            path="/challenge/no-meat/:day"
            exact={true}
            component={ChallengeProgress}
          />
          <Redirect from="/" to="/login" exact={true} />
        </Switch>
      </Router>
    </HelmetProvider>
  );
}

export default App;
