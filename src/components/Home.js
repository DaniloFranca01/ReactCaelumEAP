import React from "react";
import { withRouter, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>CaelumEAP</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default withRouter(Home);