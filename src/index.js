import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Form from './js/components/Form';

const app = document.getElementById('app');
ReactDOM.render(
    <Form/>,
    app
);