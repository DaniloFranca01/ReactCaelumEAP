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
		this.props.history.push('/acompanhamento');
	}

	handleDarAltaClick() {

	}

	async componentDidMount() {
		const {data} = await axios.get(process.env.BASE_API + "pacientes")
		this.setState({ pacientes: data })
	}

	render() {
		return (
			<Fragment>
				<NavBar handleLogout={this.props.handleLogout} />
				<div className="tabela-pacientes">
					<table className="table">
						<thead className="table-header">
							<tr>
								<th scope="col">CPF</th>
								<th scope="col">NOME</th>
								<th scope="col">IDADE</th>
								<th scope="col">GENERO</th>
								<th scope="col">HIP DIAGNOSTICA</th>
								<th scope="col">ACÕES</th>
							</tr>
						</thead>
						<tbody>
							{this.state.pacientes.map(paciente =>
								<tr key={paciente.id}>
									<td>{paciente.cpf}</td>
									<td>{paciente.nome}</td>
									<td>{paciente.idade}</td>
									<td>{paciente.genero}</td>
									<td>{paciente.hip_diag}</td>
								</tr>
							)}
							<tr>
								<td><button onClick={() => this.handleAvaliarClick()}>Avaliar</button></td>
								<td><button onClick={() => this.handleDarAltaClick()}>Dar alta</button></td>
							</tr>
						</tbody>
					</table>
				</div>
			</Fragment>
		)
	}
}

export default withRouter(Pacientes);