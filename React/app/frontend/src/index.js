import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import Start from './components/Start'
import StatementContainer from './components/StatementContainer'

import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

const store = configureStore();

const temp = <Start/>

const StartRoute= () => (
    <div>
        <App temp={temp}/>
    </div>
);

const temp2 = <StatementContainer/>

const StatementContainerRoute= () => (
    <div>
        <App temp={temp2}/>
    </div>
);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/' component={StartRoute}/>
                <Route path='/temp' component={StatementContainerRoute}/>
            </div>
        </Router>
    </Provider>,
  document.getElementById('root')
);
