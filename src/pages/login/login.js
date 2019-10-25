import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './login.module.css';

export const Login = () => {
  const history = useHistory();
  const handleSubmit = () => history.push('/group-action');

  return (
    <Container fixed>
      <h1>Green Bucket Challenge</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <TextField
            id="email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            fullWidth={true}
          />
        </fieldset>
        <Button type="submit" variant="outlined" color="primary" size="large">
          Submit
        </Button>
      </form>
    </Container>
  );
};
