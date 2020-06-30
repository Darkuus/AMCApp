import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Authentication from './Pages/Authentication';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Group from './Pages/Group';
import Header from './Components/Header';

const exclusionArray = [
    '/',
    '/Register',
]

const Routes = ({location}:RouteComponentProps) => {

    return (
        <Route>
            {exclusionArray.indexOf(location.pathname) < 0 && <Header name = ""/>}
            <Route component={ Authentication } path="/" exact />
            <Route component={ Register } path="/Register" />
            <Route component={ Home } path="/Home" />
            <Route component={ Group } path="/Group/:id" />
        </Route>
    )
}

export default withRouter(Routes);