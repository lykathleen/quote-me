import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './QuoteText.module.scss';

const QuoteText = () => {
  const quote = useSelector((state) => state.quote);

  console.log(quote);
  return (
    <>
      <div className="quoteText">{quote.text}</div>
      <div className="quoteAuthor">{quote.author}</div>
    </>
  );
};

export default QuoteText;
