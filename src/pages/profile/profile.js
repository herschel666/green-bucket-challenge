import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Center } from '../../components/center/center';

import anna from '../../assets/anna.jpg';
import styles from './profile.module.css';

export const Profile = () => {
  const history = useHistory();
  const navigate = () => history.push('/challenge');

  return (
    <Container>
      <Center justifyContent="space-around">
        <h1 className={styles.heading}>Your profile</h1>
        <div className={styles.person}>
          <img src={anna} alt="Portrait of Anna" className={styles.pic} />
          <h2 className={styles.name}>Anna</h2>
        </div>
        {/* TODO add graph here */}
        <Button
          onClick={navigate}
          variant="outlined"
          color="primary"
          size="large"
        >
          Back to overview
        </Button>
      </Center>
    </Container>
  );
};
