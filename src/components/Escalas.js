import React, { Component } from 'react';

export default class Escalas extends Component{
  render(){
		return(
			<div>
				<h1>Escala de Coma de Glasgow</h1>
				<form>
					<div className="abertura-ocular">
						<h2>Abertura Ocular</h2>
						<select id="ocular" name="abertura-ocular">
							<option value="sem-resposta">Nenhuma resposta</option>
							<option value="dor">Responde ao estímulo doloroso</option>
							<option value="verbal">Responde ao estímulo verbal</option>
							<option value="espontanea">Resposta espontânea</option>
						</select>
					</div>
					<div className="abertura-ocular">
						<h2>Resposta Verbal</h2>
						<select id="verbal" name="resposta-verbal">
							<option value="sem-resposta">Nenhuma resposta</option>
							<option value="incompreensivel">Sons incompreensíveis</option>
							<option value="inapropriado">Palavras Inapropriadas</option>
							<option value="confuso">Resposta Confusa</option>
							<option value="orientado">Resposta Orientada</option>
						</select>
					</div>
					<div className="abertura-ocular">
						<h2>Resposta Motora</h2>
						<select id="motora" name="resposta-motora">
							<option value="sem-resposta">Nenhuma resposta</option>
							<option value="ext-anormal">Extensão anormal (descerebração)</option>
							<option value="flex-anormal">Flexão anormal (decorticação)</option>
							<option value="retirada">Movimento de retirada</option>
							<option value="local-dor">Localiza a dor</option>
							<option value="comandos">Obedece comandos</option>
						</select>
					</div>
				</form>
			</div>
		)
	}
}

