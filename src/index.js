import React from 'react';
import ReactDOM from 'react-dom';
import App from './store';

/*
    Render the App, brought in from store wrapped with provider and material-ui color theme.
*/
ReactDOM.render(
    <App />,
    document.getElementById('app'),
);

/*
    Enable hot module replacement for webpack.
*/
module.hot.accept();