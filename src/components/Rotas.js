import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login'; 
import Cadastro from './Cadastro';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import { isAuthenticated } from './Auth';

const PrivateRoute = ({component: Component, ...rest}) => (
	<Route 
		{...rest} render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from : props.location } }} />
			)
		} 
	/>
);

const Rotas = () => (
	<Router>
		<Switch>
			<Route exact path={"/"} component={Login} />
			<Route exact path={"/cadastro"} component={Cadastro} />
      <Route exact path={"/dashboard"} component={Dashboard} />
      <PrivateRoute exact path={"/welcome"} component={Welcome} />
		</Switch>
	</Router>
);

export default Rotas;



