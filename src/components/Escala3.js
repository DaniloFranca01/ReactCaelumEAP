import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Escala3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			escalas: [],
			escala: {},
			parametros3: [],
			parametro3: {},
			respostas: [],
			resposta: {},
			interpretacoes: [],
			interpretacao: {}
		};

		this.getEscala = this.getEscala.bind(this);
		this.getEscala3Parametro = this.getEscala3Parametro.bind(this);
		this.getEscalaResposta = this.getEscalaResposta.bind(this);
		this.getEscalainterpretacao = this.getEscalainterpretacao.bind(this);
	}

	async getEscala() {
		const { data } = await axios.get(process.env.BASE_API + "escalas")
		this.setState({ escalas: data })
	}

	async getEscala3Parametro() {
		const { data } = await axios.get(process.env.BASE_API + "escalas/3/parametros")
		this.setState({ parametros3: data })
	}

	async getEscalaResposta() {
		const { data } = await axios.get(process.env.BASE_API + "escalas/3/parametros/10/respostas")
		this.setState({ respostas: data })
	}

	async getEscalainterpretacao() {
		const { data } = await axios.get(process.env.BASE_API + "escalas/3/interpretacoes")
		this.setState({ interpretacoes: data })
	}

	componentDidMount() {
		this.getEscala();
		this.getEscala3Parametro();
		this.getEscalaResposta();
		this.getEscalainterpretacao();
	}

	render() {
		return (
			<div>
				<React.Fragment>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
				</React.Fragment>
				<table className="table table-sm">
					<thead className="table-header">
						<tr>
							<th scope="col">Parametros</th>
							<th scope="col">Respostas</th>
						</tr>
					</thead>
					<tbody>
						{this.state.parametros3.map(parametro =>
							<tr key={parametro.id}>
								<td scope="row">{parametro.nome}</td>
								<td>
									<button onClick={() => this.handleAvaliarClick()}><i className="fas fa-plus"></i></button>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default withRouter(Escala3);