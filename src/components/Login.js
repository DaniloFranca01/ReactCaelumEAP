import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			login_erros: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		const { email, password } = this.state;
		axios
			.post("http://localhost:3001/sessions",
				{
					user: {
						email: email,
						password: password
					}
				},
				{ withCredentials: true }

			)
			.then(response => {
				if (response.data.logged_in) {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch(error => {
				console.log("registration error", error);
			});
		event.preventDefault();
	}
	render() {
		return (
			<div className='login-cadastro'>
				<React.Fragment>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
					<meta charSet="utf-8" />
				</React.Fragment>
				<div className="container">
					<div className="d-flex justify-content-center h-100">
						<div className="card">
							<div className="card-header">
								<h3>Sign In</h3>
								<div className="d-flex justify-content-end social_icon">
									<span><i className="fab fa-google-plus-square"></i></span>
								</div>
							</div>
							<div className="card-body">
								<div className='alert-messages'>
									Aqui ficaram as mensagens de falhas e alertas
								</div>
								<form onSubmit={this.handleSubmit}>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fas fa-user"></i></span>
										</div>
										<input
											type="email"
											name="email"
											className="form-control"
											placeholder="Email"
											value={this.state.email}
											onChange={this.handleChange}
											required
										/>
									</div>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className="fas fa-key"></i></span>
										</div>
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="Senha"
											value={this.state.password}
											onChange={this.handleChange}
											required
										/>
									</div>
									<div className="row align-items-center remember">
										<input type="checkbox" />Lembrar-me
									</div>
									<div className="form-group">
										<input type="submit" value="Login" className="btn float-right login_btn ra" />
									</div>
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
									<Link to="/cadastro">Ainda não é cadastrado?</Link>
								</div>
								<div className="d-flex justify-content-center links">
									<a href="/">Esqueceu sua senha?</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(Login);