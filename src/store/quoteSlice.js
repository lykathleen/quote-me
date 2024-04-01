import { createSlice } from '@reduxjs/toolkit';
import quotes from './quotes/quotes.js';

const backgroundColour = ['white', 'black', 'pink'];

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: 'insert quote',
    author: 'insert author',
    bgColour: ''
  },
  reducers: {
    generateNewQuote: (state) => {
      // const pickBackgroundColour = () => {
      const index = Math.floor(Math.random() * backgroundColour.length);
      quoteSlice.bgColour = backgroundColour[index];
      // };

      // const pickQuote = () => {
      // const index = Math.floor(Math.random() * backgroundColour.length);
      quoteSlice.text = quotes[index].text;
      quoteSlice.author = quotes[index].author;
      // };
    }
  }
});

export const { generateNewQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
