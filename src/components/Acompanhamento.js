import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './NavBar';

class Acompanhamento extends Component {
	render() {
		return (
			<div>
				<NavBar handleLogout={this.props.handleLogout} />
				<div>
					ninja non paga de santo
			</div>
			</div>
		)
	}
}

export default withRouter(Acompanhamento);