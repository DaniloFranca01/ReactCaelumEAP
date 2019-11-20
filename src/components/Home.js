import React from "react";
import { withRouter, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div className="home-content">
          <h1>CaelumEAP</h1>
          <br />
          <h2>Seja Bem-vindo à Plataforma CaelumEAP!</h2>
          <ul>
            <li>
              <Link to="/login">Já é registrado? Faça Login!</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastre-se já!</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);