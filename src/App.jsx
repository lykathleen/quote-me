import React from 'react';
import QuoteBox from './components/QuoteBox/QuoteBox.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <QuoteBox />
      <Footer />
    </div>
  );
};

export default App;
