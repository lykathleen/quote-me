import React from 'react';
import QuoteBox from './components/QuoteBox/QuoteBox.jsx';
import LayoutContainer from './components/LayoutContainer/LayoutContainer.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <LayoutContainer>
      <QuoteBox />
      <Footer />
    </LayoutContainer>
  );
};

export default App;
