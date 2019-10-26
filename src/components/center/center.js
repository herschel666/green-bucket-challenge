import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './center.module.css';

export const Center = ({ justifyContent, children }) => (
  <div
    className={classNames(styles.wrap, {
      [styles.spaceEvenly]: justifyContent === 'space-evenly',
      [styles.spaceAround]: justifyContent === 'space-around',
      [styles.center]: justifyContent === 'center',
    })}
  >
    {children}
  </div>
);

Center.propTypes = {
  justifyContent: PropTypes.oneOf(['space-evenly', 'space-around', 'center'])
    .isRequired,
};
