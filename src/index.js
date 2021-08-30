import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Favicon url='https://github.com/gponomarenko/items-comments/tree/main/src/img/favicon.ico' />
    <App />
  </BrowserRouter>
  , document.getElementById('root'),
);
