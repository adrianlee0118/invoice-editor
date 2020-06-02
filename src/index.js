/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './store';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
