import React from 'react';
import Button from '../Button/Button'
import styles from './QuoteBox.module.scss';

const QuoteBox = () => {
  return (
      <div className={styles.quoteBox}>
        BOX HERE
        <div className={styles.text}></div>
        <div className={styles.author}></div>
        <div className={styles.buttons}>
          <Button className={styles.socialMediaButton} text='facebook'/>
          <Button className={styles.socialMediaButton} text='twitter'/>
          <Button text="New quote" className={styles.newQuoteButton}/>
        </div>
      </div>
  );
};

export default QuoteBox;
