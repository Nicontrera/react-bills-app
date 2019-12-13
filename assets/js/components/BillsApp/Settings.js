import React, { Component } from 'react';

export default class Settings extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<header>
				<h2>Settings</h2>
				<div className="theme-color" onClick={this.props.clickedThemeSelector}>
					<h4>Theme color</h4>
					<div className="selected-color"></div>
					<div className="angle-icon">
						<i className="fas fa-angle-right"></i>
					</div>
				</div>
				<div
					className={`${
						this.props.themeSelectorOpen
							? 'theme-selector active'
							: 'theme-selector'
					}`}
				>
					<select
						name="player"
						defaultValue={'DEFAULT'}
						required
						onChange={this.props.handleThemeColor}
					>
						<option value="DEFAULT" disabled>
							Select a color
						</option>
						<option value="orange" label="Orange" />
						<option value="green" label="Green" />
						<option value="blue" label="Blue" />
					</select>
				</div>
			</header>
		);
	}
}
