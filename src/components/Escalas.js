import React, { Component } from 'react';
import axios from 'axios';

export default class Escalas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			escalas: [],
			escala: {},
			parametros: [],
			parametro: {},
			parametros: [],
			parametro: {},
			interpretacoes: [],
			interpretacao: {}
		};

		this.getEscala = this.getEscala.bind(this);
		this.getEscalaParametro = this.getEscalaParametro.bind(this);
		//this.getEscalaResposta = this.getEscalaResposta.bind(this);
		//this.getEscalainterpretacao = this.getEscalainterpretacao.bind(this);
	}

	async getEscala() {
		const { data } = await axios.get(process.env.BASE_API + "escalas")
		this.setState({ escalas: data })
	}

	async getEscalaParametro(id_escala) {
		const { data } = await axios.get(process.env.BASE_API + "escalas/"+id_escala+"/parametros")
		this.setState({ parametros: data })

	}
	/*
	async getEscalaResposta() {
		const { data } = await axios.get(process.env.BASE_API + "escalas/1/parametros/7/respostas")
		this.setState({ parametros: data })
	}
	
	async getEscalainterpretacao() {
		const { data } = await axios.get(process.env.BASE_API + "escalas/2/interpretacoes")
		this.setState({ interpretacoes: data })
	}
	*/
	componentDidMount() {
		this.getEscala();
		this.getEscalaParametro();
		//this.getEscalaResposta();
		//this.getEscalainterpretacao();
	}

	render() {
		return (
			<div>
				<form>
					<div className="abertura-ocular">
						<table className="table table-sm">
							<thead className="table-header">
								<tr>
									<th scope="col">parametro</th>
								</tr>
							</thead>
							<tbody>
								{this.state.escalas.map(escala =>
									<tr key={escala.id}>
										<td scope="row">{escala.nome}</td>
										<td>
											<button onClick={() => this.handleAvaliarClick(parametro.id)}><i className="fas fa-file-medical"></i></button>
											<button className="btn-alta" onClick={() => this.handleDarAltaClick(parametro.id)}><i className="fas fa-trash-alt"></i></button>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</form >
			</div >
		)
	}
}

