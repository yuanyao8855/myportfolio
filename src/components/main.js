import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
    </Switch>
);

export default Main;
