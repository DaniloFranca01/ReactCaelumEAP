import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './NavBar';
import Escalas from './Escalas';

class Acompanhamento extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar handleLogout={this.props.handleLogout} />
				<Escalas />
				<div>
				</div>
			</div>
		)
	}
}

export default withRouter(Acompanhamento);