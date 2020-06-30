import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Authentication from '../Pages/Authentication';
import Register from '../Pages/Register';

const AuthRoutes: React.FC = () => (
    <Route>
        <Route component={ Authentication } path="/" exact />
        <Route component={ Register } path="/Register" />
    </Route>
);

export default AuthRoutes;