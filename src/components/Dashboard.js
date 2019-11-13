import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import axios from "axios";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLogoutClick() {
		axios
			.delete(BASE_API+"logout", { withCredentials: true })
			.then(response => {
				this.props.handleLogout();
			})
			.catch(error => {
				console.log("logout error", error);
			});
	}
	render() {
		return (
			<div>
				<SideNav
					onSelect={(selected) => {
						// Add your code here
					}}
				>
					<SideNav.Toggle />
					<SideNav.Nav defaultSelected="home">
						<NavItem eventKey="home">
							<NavIcon>
								<i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Home
								</NavText>
						</NavItem>
						<NavItem eventKey="charts">
							<NavIcon>
								<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText>
								Charts
								</NavText>
							<NavItem eventKey="charts/linechart">
								<NavText>
									Line Chart
										</NavText>
							</NavItem>
							<NavItem eventKey="charts/barchart">
								<NavText>
									Bar Chart
										</NavText>
							</NavItem>
						</NavItem>
					</SideNav.Nav>
				</SideNav>
				<button onClick={() => this.handleLogoutClick()}>Logout</button>
			</div>
		)
	}
}