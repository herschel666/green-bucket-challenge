import React from 'react';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge-detail.module.css';

export const ChallengeDetail = () => (
  <Container>
    <Center justifyContent="space-around">
      <h1 className={styles.heading}>No meat this week!</h1>
      <div className={styles.bubble}>
        <div className={styles.bubbleInner}>
          <h3 className={classNames(styles.name, styles.nameOne)}>Anna</h3>
          <h3 className={classNames(styles.name, styles.nameTwo)}>Lisa</h3>
          <h3 className={classNames(styles.name, styles.nameThree)}>Tim</h3>
        </div>
      </div>
      <h2>Eat no fish, no beef, no chicken for a week!</h2>
      <Typography component="p" paragraph={true}>
        Meat is the largest part of CO2 emissions of our food. By not eating
        meat for a week, your carbon footprint would be reduced by 20% (500g
        CO2-eq).
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        fullWidth={true}
        size="large"
        href="/challenge/no-meat/1"
      >
        Let's do this!
      </Button>
    </Center>
  </Container>
);
