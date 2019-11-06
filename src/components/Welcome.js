import React, { Component } from 'react';
import Cadastro from './Cadastro';

export default class Welcome extends Component{
	constructor(props){
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}

	handleSuccessfulAuth(data){
		this.props.handleLogin(data);
		this.props.history.push("/welcome");
	} 

	render(){
		return(
			<div>
				<h1>Bem-vindo ao CaleumEAP!</h1>
				<h2>Status: {this.props.loggedInStatus}</h2>
				<Cadastro handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		)
	}
}