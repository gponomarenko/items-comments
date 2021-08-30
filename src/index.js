/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Favicon url="https://getbootstrap.com/docs/4.1/assets/img/favicons/favicon.ico" />
    <App />
  </BrowserRouter>
  , document.getElementById('root'),
);
