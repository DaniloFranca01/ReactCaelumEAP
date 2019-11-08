import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cadastro from "./Cadastro";
import Login from "./Login";

class NavigationComponent extends React.Component {
  render() {
    return (
			<div>
				<h1>CaelumEAP</h1>
				<h1>Status: {this.props.loggedInStatus}</h1>
				<ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar</Link>
          </li>
        </ul>
        <hr />
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
			</div>
    );
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
	}
	
  render() {
    return (
			<Router>
				<React.Fragment>
					<NavigationComponent />
					<Route
						exact
						path={"/cadastro"}
						render={props => (
							<Cadastro
								{...props}
								handleSuccessfulAuth={this.handleSuccessfulAuth}
							/>
						)}
					/>
					<Route
						exact
						path={"/login"}
						render={props => (
							<Login
								{...props}
								handleSuccessfulAuth={this.handleSuccessfulAuth}
							/>
						)}
					/>
				</React.Fragment>
			</Router>
    );
  }
}