import React from "react";
import { withRouter, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <div className="btn-login">
          <button className="home-btn"><Link to="/login">Faça Login</Link></button>
        </div>
        <div className="btn-cadastro">
          <button className="home-btn"><Link to="/cadastro">Cadastre-se</Link></button>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);