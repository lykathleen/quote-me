import React from 'react';

import styles from './Button.module.scss';

const Button = ({ link, children, id, bgColour }) => {

  return (
    <a
      id={id}
      href={link}
      className={styles.button}
      target="blank"
      style={{ backgroundColor: bgColour, borderColor: bgColour }}
    >
      {children}
    </a>
  );
};

export default Button;
