import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './NavBar';
import Escalas from './Escalas';

class Acompanhamento extends Component {
	constructor(props) {
		super(props);

		this.handleEscalaClick = this.handleEscalaClick.bind(this);
		this.handleRemoverEscalaClick = this.handleRemoverEscalaClick.bind(this);
	}

	handleEscalaClick(){
		this.props.history.push("/escalas")
	}

	handleRemoverEscalaClick(){

	}

	render() {
		return (
			<div>
				<React.Fragment>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
				</React.Fragment>
				<NavBar handleLogout={this.props.handleLogout} />
				<div className="dados-paciente">
					<table className="table table-sm">
						<thead className="table-header">
							<tr>
								<th scope="col-5">Nome</th>
								<th scope="col-5">Idade</th>
								<th scope="col-5">Hip Diagnóstica</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td scope="row">Jose</td>
								<td scope="row">85</td>
								<td scope="row">Cancer de pulmão</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="escala-table">
					<table className="table table-sm table-dark">
						<thead className="table-header">
							<tr>
								<th scope="col-5">Escala</th>
								<th scope="col-5">Pontução</th>
								<th scope="col-5">Ações</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td scope="row">Braden</td>
								<td scope="row">25</td>
								<td>
									<button onClick={() => this.handleEscalaClick()}><i className="fas fa-edit"></i></button>
									<button className="btn-alta" onClick={() => this.handleRemoverEscalaClick(parametro.id)}><i className="fas fa-trash-alt"></i></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default withRouter(Acompanhamento);