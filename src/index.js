import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Form from './js/components/Form';

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Form/>
    </Provider>,
    app
);