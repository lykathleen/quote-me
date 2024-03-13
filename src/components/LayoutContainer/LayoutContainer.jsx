import React from 'react';
import styles from './LayoutContainer.module.scss';

const LayoutContainer = ({ children, footer }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <div className={styles.footer}>{footer}</div>
    </>
  );
};

export default LayoutContainer;
