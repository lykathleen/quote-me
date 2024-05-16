import React from 'react';

import styles from './Button.module.scss';
/**
 *
 * text
 * icon/pic
 * onClick -> link?, but onClick changes quote
 * size
 */
const Button = ({ link, children, id }) => {
  return (
    <a id={id} href={link} className={styles.button} target="blank">
      {children}
    </a>
  );
};

export default Button;
