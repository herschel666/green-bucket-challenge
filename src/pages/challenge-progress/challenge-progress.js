import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import day0 from '../../assets/day0.png';
import day1 from '../../assets/day1.png';
import day2 from '../../assets/day2.png';
import day3 from '../../assets/day3.png';
import day4 from '../../assets/day4.png';
import day5 from '../../assets/day5.png';
import styles from './challenge-progress.module.css';

const graphs = [day0, day1, day2, day3, day4, day5, day5, day5];

export const ChallengeProgress = ({ match }) => {
  const history = useHistory();
  const navigateToCheck = () =>
    history.push(`/challenge/no-meat/${match.params.day}/check`);
  const navigateToInfo = () =>
    history.push(
      `/challenge/no-meat/info?day=${match.params.day}&step=progress`
    );

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>No meat this week!</h1>
        <h2 className={styles.subHeading}>Day {match.params.day} of 7</h2>
        <div className={styles.graph}>
          <img src={graphs[match.params.day]} width="100%" />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="large"
            onClick={navigateToCheck}
            classes={{ root: styles.button }}
          >
            How did you do today?
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            onClick={navigateToInfo}
            classes={{ root: classNames(styles.button, styles.buttonInfo) }}
          >
            More informations
          </Button>
        </div>
      </Center>
    </Container>
  );
};

ChallengeProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      day: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
