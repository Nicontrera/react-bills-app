import React, { Component } from 'react';

export default class FloatingMenu extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<nav
				id="FloatingMenu"
				className={(() => {
					switch (this.props.themeColor) {
						case 'green':
							return 'green-theme';
						case 'orange':
							return 'orange-theme';
						case 'blue':
							return 'blue-theme';
						default:
							return '';
					}
				})()}
			>
				<div
					className="link"
					onClick={this.props.selectSection.bind(null, 'billsList')}
				>
					<div className="icon">
						<i className="fas fa-home"></i>
					</div>
					<div className="text">Home</div>
				</div>
				<div className="link">
					<div className="icon">
						<i className="fas fa-piggy-bank"></i>
					</div>
					<div className="text">Save</div>
				</div>
				<div className="link">
					<div className="icon">
						<i className="fas fa-exchange-alt"></i>
					</div>
					<div className="text">Transfer</div>
				</div>
				<div
					className="link"
					onClick={this.props.selectSection.bind(null, 'settings')}
				>
					<div className="icon">
						<i className="fas fa-cogs"></i>
					</div>
					<div className="text">Settings</div>
				</div>
				<div className="link">
					<div className="add-button" onClick={this.props.clickedAddBill}>
						<div className="icon">
							<i className="fas fa-plus"></i>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
