import React, { Component } from 'react';
import axios from 'axios';

export default class Cadastro extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: "",
			password: "",
			password_confirmation: "",
			cadastro_erros: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	
	handleSubmit(event){
		const { email, password, password_confirmation } = this.state;
		axios
			.post("http://localhost:3001/registrations",
			{
				user: {
					email: email,
					password: password,
					password_confirmation: password_confirmation
				}
			},
			{ withCredentials: true }

			)
			.then(response => {
        if (response.data.status === "created") {
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
			<div className="login-cadastro">
				<React.Fragment>
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"/>
					<meta charSet="utf-8"/>
				</React.Fragment>
				<div className="container">
					<div className="d-flex justify-content-center h-100">
						<div className="card-cadastro">
							<div className="card-header">
								<h3>Cadastro</h3>
							</div>
							<div className="card-body">
								<form onSubmit={this.handleSubmit}>
									<div className="input-group form-group">
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
										<input 
											type="password" 
											name="password" 
											className="form-control" 
											placeholder="Senha (no mínimo 6 caracteres)" 
											value={this.state.password} 
											onChange={this.handleChange} 
											required
										/>
									</div>
									<div className="input-group form-group">
										<input 
											type="password" 
											name="password_confirmation" 
											className="form-control" 
											placeholder="Confirme sua senha" 
											value={this.state.password_confirmation} 
											onChange={this.handleChange} 
											required
										/>
									</div>
									<div className="input-group form-group">
										<input type="text" name="nome" className="form-control" placeholder="Nome"/>
									</div>
									<div className="input-group form-group cargos">
										<select id="cargo" name="cargos">
											<option>Selecione o seu cargo</option>
											<option value="enfermeiro">Enfermeiro</option>
											<option value="fisioterapeuta">Fisioterapeuta</option>
											<option value="medico">Médico</option>
											<option value="nutricionista">Nutricionista</option>
										</select>
									</div>
									<div className="input-group form-group">
										<input id="documento" type="text" className="form-control" placeholder="Documento"/>
									</div>
									<div className="form-group">
										<input type="submit" value="Enviar" className="btn float-right login_btn"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}