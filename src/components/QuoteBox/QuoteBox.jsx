import React from 'react';
import Button from '../Button/Button';
import styles from './QuoteBox.module.scss';
import QuoteText from '../QuoteText/QuoteText';

const QuoteBox = () => {

  return (
    <div className={styles.quoteBox}>
      <div className={styles.text}>
        <QuoteText />
      </div>
      <div className={styles.author}></div>
      <div className={styles.buttons}>
        <Button className={styles.socialMediaButton} text="facebook" />
        <Button className={styles.socialMediaButton} text="twitter" />
        <Button text="New quote" className={styles.newQuoteButton} />
      </div>
    </div>
  );
};

export default QuoteBox;
