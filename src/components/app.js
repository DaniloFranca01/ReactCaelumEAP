import React, { Component } from "react";
import { Route, Link, withRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios
      .get(process.env.BASE_API+"logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }
  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
    this.props.history.push('/login');
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div>
        <Route
          exact
          path={"/"}
          render={props => (
            <Home
              {...props}
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
        <PrivateRoute
          exact
          path={"/dashboard"}
          component={Dashboard}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default withRouter(App);