import React, { Component } from 'react';
import Button from './Button';

export default class Counter extends Component {
	constructor() {
		super();
		this.state = {
			status: 'auto',
			currentNumber: 0
		};
	}

	componentDidMount() {
		if (this.state.status == 'auto') {
			this.setState(
				{
					status: this.props.status
				},
				() => {
					this.counterRun();
				}
			);
		}
	}

	clickedPlus = () => {
		this.setState({
			currentNumber: this.state.currentNumber + 1
		});
	};

	clickedMinus = () => {
		this.setState({
			currentNumber: this.state.currentNumber - 1
		});
	};

	counterRun = () => {
		console.log('si me llamaron!');
		setInterval(() => {
			this.setState({
				currentNumber: this.state.currentNumber + 1
			});
		}, 1000);
	};

	render() {
		const styleCounter = {
			width: '100%',
			maxWidth: '400px',
			margin: '0 auto'
		};

		const styleNumber = {
			border: '3px solid #000',
			padding: '20px',
			fontSize: '2rem',
			fontWeight: '900',
			textAlign: 'center'
		};

		const styleButtons = {
			display: this.props.status === 'auto' ? 'none' : 'flex'
		};

		return (
			<div id="counter" style={styleCounter}>
				<div className="number" style={styleNumber}>
					{this.state.currentNumber}
				</div>
				<div className="buttons" style={styleButtons}>
					<Button
						action="restar"
						hoverColor="red"
						fontColor="white"
						backgroundColor="yellow"
						trigger={this.clickedMinus}
						fontSize="2rem"
					>
						-
					</Button>
					<Button
						action="sumar"
						hoverColor="blue"
						fontColor="white"
						backgroundColor="green"
						trigger={this.clickedPlus}
						fontSize="1.5rem"
					>
						+
					</Button>
				</div>
			</div>
		);
	}
}
