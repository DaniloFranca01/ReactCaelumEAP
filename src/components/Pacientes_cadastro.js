import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

class CadastroPacientes extends Component{
  constructor(props){
		super(props);
		this.state = {
			cpf: "",
			nome: "",
			idade: "",
			genero: "",
			hip_diag: ""
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
		const { cpf, nome, idade, genero, hip_diag } = this.state;
		axios
			.post(process.env.BASE_API+"pacientes",
			{
				
				cpf: cpf,
				nome: nome,
				idade: idade,
				genero: genero,
				hip_diag: hip_diag
				
			},
			{ withCredentials: true }

			)
			.then(response => {
        if (response.data.status === "created") {
          this.props.handlePacientes();
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
	}
	render(){
		return(
			<div className="pacientes-cadastro">
				<Dashboard />
				<div className="formulario">
					<form onSubmit={this.handleSubmit}>
						<div className="form-inputs">
							<input 
							type="number" 
							name="cpf" 
							className="" 
							placeholder="CPF" 
							value={this.state.cpf} 
							onChange={this.handleChange} 
							required
							/>
						</div>
						<div className="form-inputs">
							<input 
							type="text" 
							name="nome" 
							className="" 
							placeholder="Nome" 
							value={this.state.nome} 
							onChange={this.handleChange} 
							required
							/>
						</div>
						<div className="form-inputs">
							<input 
							type="number" 
							name="idade" 
							className="" 
							placeholder="Idade" 
							value={this.state.idade} 
							onChange={this.handleChange} 
							required
							/>
						</div>
						<div className="form-inputs">
							<select>
								<option 
									name="genero" 
									className="" 
									onChange={this.handleChange} 
									value={this.state.genero} 
									required>Feminino</option>
								<option 
									name="genero" 
									className="" 
									onChange={this.handleChange} 
									value={this.state.genero} 
									required>Masculino</option>
							</select>
						</div>
						<div className="form-inputs">
							<input 
							type="text" 
							name="hip_diag" 
							className="" 
							placeholder="Hipótese diagnóstica" 
							value={this.state.hip_diag} 
							onChange={this.handleChange} 
							required
							/>
						</div>
						<div className="form-group">
							<input type="submit" value="Cadastrar" className="btn cadastrar_btn"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}


export default withRouter(CadastroPacientes);