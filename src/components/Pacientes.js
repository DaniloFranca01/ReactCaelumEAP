import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NavBar from './NavBar';

class Pacientes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pacientes: [],
			paciente: {}
		};

		this.handleAvaliarClick = this.handleAvaliarClick.bind(this);
		this.handleDarAltaClick = this.handleDarAltaClick.bind(this);
	}


	handleAvaliarClick() {
		this.props.history.push("/acompanhamento")
	}

	handleDarAltaClick(id) {
		axios
			.delete(process.env.BASE_API + "pacientes/"+id)
			.then(res => {
				this.setState(previousState => {
					return {
						pacientes: previousState.pacientes.filter(p => p.id !== id)
					};
				});
			})	
	};

	async componentDidMount() {
		const { data } = await axios.get(process.env.BASE_API + "pacientes")
		this.setState({ pacientes: data })
	}

	render() {
		return (
			<Fragment>
				<div className="pacientes">
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
					<NavBar handleLogout={this.props.handleLogout} />
					<div className="tabela-pacientes">
						<table className="table table-hover table-dark">
							<thead className="table-header">
								<tr>
									<th scope="col">CPF</th>
									<th scope="col">Nome</th>
									<th scope="col">Idade</th>
									<th scope="col">Gênero</th>
									<th scope="col">Hip Diagnóstica</th>
									<th scope="col">Ações</th>
								</tr>
							</thead>
							<tbody>
								{this.state.pacientes.map(paciente =>
									<tr key={paciente.id}>
										<td scope="row">{paciente.cpf}</td>
										<td scope="row">{paciente.nome}</td>
										<td scope="row">{paciente.idade}</td>
										<td scope="row">{paciente.genero}</td>
										<td scope="row">{paciente.hip_diag}</td>
										<td scope="row">
											<button onClick={() => this.handleAvaliarClick()}><i className="fas fa-file-medical"></i></button>
											<button className="btn-alta" onClick={() => this.handleDarAltaClick(paciente.id)}><i className="fas fa-trash-alt"></i></button>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default withRouter(Pacientes);