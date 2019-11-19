import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLogoutClick() {
		axios
			.delete(process.env.BASE_API + "logout", { withCredentials: true })
			.then(response => {
				this.props.handleLogout();
			})
			.catch(error => {
				console.log("logout error", error);
			});
	}
	render() {
		return (
			<div>
				<React.Fragment>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
				</React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-light menu-default">
					<a className="navbar-brand" href="/">CaelumEAP</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse menu-default">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">Acompanhar</a>
							</li>
							<li className="nav-item active">
								<Link to="/cadastro-pacientes" className="nav-link">Cadastrar Pacientes</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto">
							<li>
								<div className="dropdown">
									<button className="dropbtn">{/*this.state.user.nome*/}User</button>
									<div className="dropdown-content">
										<Link to="/">Editar Perfil</Link>
										<button onClick={() => this.handleLogoutClick()}>Logout</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</nav>
				<React.Fragment>
					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
				</React.Fragment>
			</div>
		)
	}
}
export default NavBar;