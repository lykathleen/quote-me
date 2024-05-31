import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './QuoteText.module.scss';

const QuoteText = ({visible}) => {
  const quote = useSelector((state) => state.quote);

  return (
    <div className={styles.quoteTextContainer}>
      <div className={styles.text} id='text'>
      <div className={`${styles.quoteText} ${visible ? styles.fadeIn : styles.fadeOut}`}>
        <i class="fa fa-quote-left fa-pull-left fa-border">{quote.text}</i>
      </div>
      </div>
      <span id='author'>{quote.author}</span>
    </div>
  );
};

export default QuoteText;
