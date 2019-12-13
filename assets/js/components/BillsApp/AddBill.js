import React, { Component } from 'react';

export default class AddBill extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			price: '',
			status: 'unpaid',
			bill_icon: ''
		};
	}

	inputChange = () => {
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = () => {
		event.preventDefault();
		this.setState({
			business_name: '',
			price: '',
			bill_icon: ''
		});
		this.props.saveBill(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<section
				id="AddBill"
				className={(() => {
					switch (this.props.themeColor) {
						case 'green':
							return this.props.addBillOpen
								? 'active green-theme'
								: 'green-theme';
						case 'orange':
							return this.props.addBillOpen
								? 'active orange-theme'
								: 'orange-theme';
						case 'blue':
							return this.props.addBillOpen
								? 'active blue-theme'
								: 'blue-theme';
						default:
							return '';
					}
				})()}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input
								type="text"
								id="business_name"
								name="business_name"
								onChange={this.inputChange}
								value={this.state.business_name}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								name="price"
								onChange={this.inputChange}
								value={this.state.price}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="bill_icon">Bill Icon</label>
							<input
								type="text"
								id="bill_icon"
								name="bill_icon"
								onChange={this.inputChange}
								value={this.state.bill_icon}
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}
