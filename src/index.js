import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import styles from './index.module.scss';
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
