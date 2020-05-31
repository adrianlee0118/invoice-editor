import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Invoice from './js/components/Invoice';

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Invoice/>
    </Provider>,
    app
);