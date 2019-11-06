import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../style/App.css'
import Login from './Login'; 
import Cadastro from './Cadastro';
import Dashboard from './Dashboard';
import Welcome from './Welcome';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      loggedInStatus: "not_logged_in",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data){
    this.setState({
      loggedInStatus: "logged_in",
      user: data
    });
  }

	render(){
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path={"/"} component={Login} />
						<Route exact path={"/cadastro"} component={Cadastro} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route 
              exact
              path={"/welcome"} 
              render={props => (
                <Welcome { ... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
              )} 
              />
					</Switch>
				</Router>
			</div>
		)
	}
}
