// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import StatementContainer from './components/StatementContainer';
import Start from './components/Start';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={<App >
            <Start />
        </App>} />
        <Route path="*" component={<App >
            <StatementContainer />
        </App>} />
    </Router>
);

export default Routes;