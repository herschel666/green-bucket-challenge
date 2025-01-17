import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './group-action.module.css';

export const GroupAction = () => {
  const history = useHistory();
  const handleSubmit = () => history.push('/challenge');

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Center justifyContent="space-evenly">
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="large"
            type="submit"
            classes={{ root: styles.button }}
          >
            Start a Team
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="large"
            type="submit"
            classes={{ root: styles.button }}
          >
            Join a Team
          </Button>
        </Center>
      </form>
    </Container>
  );
};
