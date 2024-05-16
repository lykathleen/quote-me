import React from 'react';
import Button from '../Button/Button';
import styles from './QuoteBox.module.scss';
import QuoteText from '../QuoteText/QuoteText';
import { useDispatch } from 'react-redux';
import { generateNewQuote } from '../../store/quoteSlice';

const twitterLink = 'https://twitter.com/intent/tweet'
const tumblrLink = 'https://www.tumblr.com/privacy/consent/begin?redirect=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%2Cfreecodecamp%26caption%3DAristotle%26content%3DThere%2520is%2520only%2520one%2520way%2520to%2520avoid%2520criticism%253A%2520do%2520nothing%252C%2520say%2520nothing%252C%2520and%2520be%2520nothing.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button&v=2'

const QuoteBox = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(generateNewQuote());
  }

  return (
    <div className={styles.quoteBox} id='quote-box'>
        <QuoteText />
      <div className={styles.buttons}>
        <div className={styles.socialMediaButtons}>
          <Button link={twitterLink} id='tweet-quote'>
            <i className="fa fa-twitter"/>
          </Button>
          <Button link={tumblrLink} id='tumblr-quote'>
            <i className="fa fa-tumblr"></i>
          </Button>
          </div>
          <button id='new-quote' onClick={handleClick} className={styles.newQuoteButton} type='button'>New Quote Please!</button>
      </div>
    </div>
  );
};

export default QuoteBox;
