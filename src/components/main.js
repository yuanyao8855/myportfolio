import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import ContactMe from './contactme';

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		  <Route  path="/aboutme" component={AboutMe} />
		<Route  path="/projects" component={Projects} /> 
		<Route  path="/resume" component={Resume} /> 
		<Route  path="/contactme" component={ContactMe} /> 
	</Switch>
);

export default Main;
