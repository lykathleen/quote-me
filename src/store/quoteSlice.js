import { createSlice } from '@reduxjs/toolkit';
import quotes from './quotes/quotes.js';

const backgroundColour = ['white', 'black', 'pink'];

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: quotes[0].text,
    author: quotes[0].author,
    bgColour: ''
  },
  reducers: {
    generateNewQuote: (state) => {
      const index = Math.floor(Math.random() * backgroundColour.length);
      state.text = quotes[index].text;
      state.author = quotes[index].author;
    }
  }
});

export const { generateNewQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
