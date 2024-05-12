import React from 'react';

import styles from './Button.module.scss';
/**
 *
 * text
 * icon/pic
 * onClick -> link?, but onClick changes quote
 * size
 */
const Button = ({ link, children }) => {
  return (
    <a href={link} className={styles.button} >
      {children}
    </a>
  );
};

export default Button;
