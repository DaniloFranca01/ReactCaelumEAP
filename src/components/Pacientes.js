import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import { withRouter } from "react-router-dom";

class Pacientes extends Component{
  constructor(props){
		super(props);
			this.state = {
				pacientes: []
			};

		this.getPaciente = this.getPaciente.bind(this);
		this.handleAvaliarClick = this.handleAvaliarClick.bind(this);
		this.handleDarAltaClick = this.handleDarAltaClick.bind(this);
	}

	getPaciente(){
		axios 
			.get(process.env.BASE_API+"pacientes")
			.then((response) => {return response.json()})
      .then((data) => {this.setState({ pacientes: data }) });
	}

	handleAvaliarClick(){
		this.props.history.push('/acompanhamento'); 
	}

	handleDarAltaClick(){

	}

	componentDidMount(){
		this.getPaciente;
	}
	render(){
		return(
			<div>
				<Dashboard />
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
                {this.state.pacientes.map((paciente) =>
                <tr>
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
			</div>
		)
	}
}

export default withRouter(Pacientes);