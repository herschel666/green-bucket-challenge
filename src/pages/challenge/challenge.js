import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Center } from '../../components/center/center';

import challengeFootprint from '../../assets/challengeFootprint.png';
import styles from './challenge.module.css';

export const Challenge = () => {
  const history = useHistory();
  const navigate = () => history.push('/challenge/no-meat');

  return (
    <Container>
      <Center justifyContent="center">
        <h1 className={styles.heading}>Choose a challenge!</h1>
        <Typography component="p" align="center" paragraph={true}>
          Team Altonaer Wasserratten
          <br />
          <b>Lisa · Anna · Tim</b>
        </Typography>
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
        <div className={styles.paddedImage}>
        <img
          src={challengeFootprint}
          width="100%"
          alt=""
        />
        </div>
      </Center>
    </Container>
  );
};
