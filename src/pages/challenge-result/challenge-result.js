import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import styles from './challenge-result.module.css';

export const ChallengeResult = ({ day, success }) => {
  const proceedUrl =
    day === '7'
      ? '/challenge/no-meat/finish'
      : `/challenge/no-meat/${Number(day) + 1}`;
  const history = useHistory();
  const navigateToNextDay = () => history.push(proceedUrl);
  const navigateToInfo = () =>
    history.push(
      `/challenge/no-meat/info?day=${day}&step=${
        success ? 'success' : 'almost'
      }`
    );
  const emoji = success ? '🚀' : '👻';
  const heading = success ? 'Awesome' : 'Not your day';
  const text = success
    ? 'You saved 300g CO2 today! (in comparison to the average Hamburg person)'
    : 'You probably found good reasons, but the challenge is not to eat any meat! Try harder tomorrow.';
  const proceedLabel = success ? `I'm sustainable` : 'Sorry';

  return (
    <Container>
      <Center justifyContent="space-around">
        <span className={styles.emoji} role="img">
          {emoji}
        </span>
        <h1 className={styles.heading}>{heading}!</h1>
        <Typography component="p" align="center" paragraph={true}>
          {text}
        </Typography>
        <div>
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="large"
            onClick={navigateToNextDay}
            classes={{ root: classNames(styles.button, styles.buttonProceed) }}
          >
            {proceedLabel}!
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            onClick={navigateToInfo}
            classes={{ root: classNames(styles.button, styles.buttonInfo) }}
          >
            Tell me more!
          </Button>
        </div>
      </Center>
    </Container>
  );
};

ChallengeResult.propTypes = {
  day: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};
