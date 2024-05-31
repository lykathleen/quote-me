import { createSlice } from '@reduxjs/toolkit';
import quotes from './quotes/quotes.js';

const backgroundColours = [
  '#f2c6c2',
  '#f2e8df',
  '#f28585',
  '#f2b263',
  '#86a69d'
];

export const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    text: quotes[0].text,
    author: quotes[0].author,
    bgColour: backgroundColours[0]
  },
  reducers: {
    generateNewQuote: (state) => {
      const index = Math.floor(Math.random() * quotes.length);

      state.text = quotes[index].text;
      state.author = quotes[index].author;
    },
    updateBackgroundColour: (state) => {
      const index = Math.floor(Math.random() * backgroundColours.length);
      state.bgColour = backgroundColours[index];
    }
  }
});

export const { generateNewQuote, updateBackgroundColour } = quoteSlice.actions;

export default quoteSlice.reducer;
