import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import finish from '../../assets/finish.png';
import styles from './challenge-finish.module.css';

export const ChallengeFinish = () => {
  const history = useHistory();
  const navigateToProfile = () => history.push(`/profile/anna`);
  const navigateToInfo = () =>
    history.push(`/challenge/no-meat/info?step=finish`);

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>No meat this week!</h1>
        <h2 className={styles.subHeading}>Challenge over!</h2>
        <div className={styles.graph}>
          <img src={finish} width="100%" />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            fullWidth={true}
            size="large"
            onClick={navigateToProfile}
            classes={{ root: styles.button }}
          >
            End challenge
          </Button>
          <Button
            variant="outlined"
            fullWidth={true}
            size="large"
            onClick={navigateToInfo}
            classes={{ root: classNames(styles.button, styles.buttonInfo) }}
          >
            More information
          </Button>
        </div>
      </Center>
    </Container>
  );
};
