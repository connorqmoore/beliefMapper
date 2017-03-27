import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import StatementContainer from './components/StatementContainer'

import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App >
            <StatementContainer />
        </App>
    </Provider>,
  document.getElementById('root')
);
