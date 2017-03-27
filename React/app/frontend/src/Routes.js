// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import StatementContainer from './components/StatementContainer';
import Start from './components/Start';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={Start} />
        <Route path="*" component={StatementContainer} />
    </Router>
);

export default Routes;