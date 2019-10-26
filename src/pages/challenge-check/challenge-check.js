import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge-check.module.css';

export const ChallengeCheck = ({ match }) => {
  const history = useHistory();
  const navigateToSuccess = () =>
    history.push(`/challenge/no-meat/${match.params.day}/success`);
  const navigateToFailure = () =>
    history.push(`/challenge/no-meat/${match.params.day}/almost`);

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>No meat this week!</h1>
        <div>
          <h2 className={styles.subHeading}>Day {match.params.day} of 7</h2>
          <h2 className={styles.subHeading}>
            Eat no fish, no beef, no chicken for a week!
          </h2>
        </div>
        <h2
          className={classNames(styles.subHeading, styles.subHeadingHighlight)}
        >
          Did you eat meat today?
        </h2>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={navigateToSuccess}
          classes={{ root: styles.successButton }}
        >
          No!
        </Button>
        <div className={styles.failure}>
          <div className={styles.failureRow}>
            <Button
              variant="outlined"
              size="large"
              classes={{ root: styles.failureButton }}
              onClick={navigateToFailure}
            >
              Fish
            </Button>
            <Button
              variant="outlined"
              size="large"
              classes={{ root: styles.failureButton }}
              onClick={navigateToFailure}
            >
              Chicken
            </Button>
          </div>
          <div className={styles.failureRow}>
            <Button
              variant="outlined"
              size="large"
              classes={{ root: styles.failureButton }}
              onClick={navigateToFailure}
            >
              Beef
            </Button>
            <Button
              variant="outlined"
              size="large"
              classes={{ root: styles.failureButton }}
              onClick={navigateToFailure}
            >
              Pork
            </Button>
          </div>
        </div>
      </Center>
    </Container>
  );
};

ChallengeCheck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      day: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
