import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge.module.css';

export const Challenge = () => (
  <Container>
    <Center justifyContent="center">
      <h1 className={styles.heading}>Start a challenge!</h1>
      <Button
        variant="outlined"
        color="primary"
        fullWidth={true}
        size="large"
        href="/challenge/no-meat"
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
