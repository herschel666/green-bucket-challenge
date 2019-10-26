import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge-info.module.css';

export const ChallengeInfo = ({ location }) => {
  const params = new URLSearchParams(location.search);

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>No meat this week!</h1>
        <h2 className={styles.subHeading}>
          Eat no fish, no beef, no chicken for a week!
        </h2>
        <Typography component="p" align="center" paragraph={true}>
          Meat is the largest part of CO2 emissions of our food. By not eating
          meat for a week, your carbon footprint would be reduced by 20% (500g
          CO2-eq).
        </Typography>
        {/* TODO: Add meat graph here... */}
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          size="large"
          href={`/challenge/no-meat/${params.get('day')}`}
          classes={{ root: styles.button }}
        >
          back
        </Button>
      </Center>
    </Container>
  );
};

ChallengeInfo.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
