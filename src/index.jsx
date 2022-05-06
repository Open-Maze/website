import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';

import './styles/reset.scss';
import './styles/main.scss';
import './styles/fonts.scss';
import './styles/colors.scss';

import reportWebVitals from './reportWebVitals';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
