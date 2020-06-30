import React from 'react';
import { Route, Router, withRouter, RouteComponentProps } from 'react-router-dom';

import Home from '../Pages/Home';
import Group from '../Pages/Group';
import Header from '../Components/Header';

const AppRoutes: React.FC = () => (
    <Route>
        <Header name = ""/>
        <Route component={ Home } path="/" exact />
        <Route component={ Group } path="/group/:id" />
    </Route>
);

export default AppRoutes;