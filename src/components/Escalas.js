import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Escala1 from './Escala1';
import Escala2 from './Escala2';
import Escala3 from './Escala3';

class Escalas extends Component{
	constructor(props){
		super(props);

		this.handleEscalas = this.handleEscalas.bind(this);
	}

	handleEscalas(id){
		if (id == 1){
			return <Escala1 />
		}
		else if(id == 2){
			return <Escala2 />
		}
		else {
			return <Escala3 />
		}
		
	}

	render() {
		return (
			<div>
				<Escala1 />
				<Escala2 />
				<Escala3 />
			</div >
		)
	}
}

export default withRouter(Escalas);