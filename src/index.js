import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/index.scss"
import './i18n';
import App from './App';

render(
    <Provider store = { store }>
        <BrowserRouter>
            <Suspense fallback="...loading">
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);