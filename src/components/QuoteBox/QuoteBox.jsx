import React from 'react';

import styles from './QuoteBox.module.scss';

const QuoteBox = () => {
  return (
      <div className={styles.quoteBox}>
        BOX HERE
        <div className={styles.text}></div>
        <div className={styles.author}></div>
        <div className={styles.buttons}>
          <button>facebook</button>
          <button>twitter</button>
          <button>new quote</button>
        </div>
      </div>
  );
};

export default QuoteBox;
