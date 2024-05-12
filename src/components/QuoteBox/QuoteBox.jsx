import React from 'react';
import Button from '../Button/Button';
import styles from './QuoteBox.module.scss';
import QuoteText from '../QuoteText/QuoteText';

const twitterLink = 'https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22There+is+only+one+way+to+avoid+criticism%3A+do+nothing%2C+say+nothing%2C+and+be+nothing.%22+Aristotle'
const tumblrLink = 'https://www.tumblr.com/privacy/consent/begin?redirect=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%2Cfreecodecamp%26caption%3DAristotle%26content%3DThere%2520is%2520only%2520one%2520way%2520to%2520avoid%2520criticism%253A%2520do%2520nothing%252C%2520say%2520nothing%252C%2520and%2520be%2520nothing.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button&v=2'

const QuoteBox = () => {

  return (
    <div className={styles.quoteBox}>
        <QuoteText />
      <div className={styles.author}></div>
      <div className={styles.buttons}>
        <div className={styles.socialMediaButtons}>
          <Button link={twitterLink}>
            <i className="fa fa-twitter"/>
          </Button>
          <Button link={tumblrLink}>
            <i className="fa fa-tumblr"></i>
          </Button>
          </div>
          <Button className={styles.newQuoteButton}>New Quote Please!</Button>
      </div>
    </div>
  );
};

export default QuoteBox;
