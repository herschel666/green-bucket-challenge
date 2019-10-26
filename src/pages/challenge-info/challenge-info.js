import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import infoEquals from '../../assets/infoEquals.png';
import infoBreakdown from '../../assets/infoBreakdown.png';
import styles from './challenge-info.module.css';

const getBackUrl = (params) => {
  const day = params.get('day');
  const step = params.get('step');

  switch (step) {
    case 'finish': {
      return '/challenge/no-meat/finish';
    }
    case 'progress': {
      return `/challenge/no-meat/${day}`;
    }
    case 'success':
    case 'almost': {
      return `/challenge/no-meat/${day}/${step}`;
    }
    default: {
      throw Error(`Unknow challenge step "${step}".`);
    }
  }
};

export const ChallengeInfo = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const history = useHistory();
  const navigate = () => history.push(getBackUrl(params));

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>No meat this week!</h1>
        <Typography component="p" align="center" paragraph={true}>
          Meat is the largest source of CO₂ in our daily diet.
          By not eating meat for a week, you can save up to 12kg CO₂eq.
        </Typography>
        <img className={styles.centerImage} src={infoEquals} alt="Comparision of Meat and Car drive CO2 Emissions" width="300px" />
        <Typography component="p" align="center" paragraph={true}>
        1kg Meat requires up to 20.000L freshwater and during the production 11kg CO₂eq are emitted.
        </Typography>
        <img className={styles.centerImage} src={infoBreakdown} alt="Breakdown of Food Emissions" width="100%" />
        <Button
          variant="outlined"
          color="primary"
          fullWidth={true}
          size="large"
          onClick={navigate}
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
