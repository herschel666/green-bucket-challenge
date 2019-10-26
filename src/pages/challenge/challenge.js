import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge.module.css';

export const Challenge = () => {
  const history = useHistory();
  const navigate = () => history.push('/challenge/no-meat');

  return (
    <Container>
      <Center justifyContent="center">
        <h1 className={styles.heading}>Start a challenge!</h1>
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          size="large"
          onClick={navigate}
          classes={{ root: styles.button }}
        >
          No meat this week!
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          size="large"
          classes={{ root: styles.button }}
        >
          No car rides this week
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          size="large"
          classes={{ root: styles.button }}
        >
          &hellip;
        </Button>
      </Center>
    </Container>
  );
};
