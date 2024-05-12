import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './QuoteText.module.scss';

const QuoteText = () => {
  const quote = useSelector((state) => state.quote);

  console.log(quote);
  return (
    <div className={styles.quoteText}>
      <div><i class="fa fa-quote-left fa-pull-left fa-border">{quote.text}</i></div>
      <span>{quote.author}</span>
    </div>
  );
};

export default QuoteText;
