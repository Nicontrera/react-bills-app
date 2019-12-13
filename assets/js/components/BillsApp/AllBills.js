import React, { Component } from 'react';

export default class AllBills extends Component {
	constructor() {
		super();
		this.state = {};
	}

	//https://c7.uihere.com/icons/358/544/847/company-d23ad282fb3350d9eab92ce12076a274.png

	showAllBills = () => {
		const bills = this.props.allBills;
		if (bills.length > 0) {
			return bills.map((bill, index) => {
				return (
					<li
						className={`bill ${bill.status == 'paid' ? 'active' : ''}`}
						key={index}
					>
						<div className="company">
							<div className="logo">
								<img src={bill.bill_icon} />
							</div>
							<div className="title">{bill.business_name}</div>
						</div>
						<div className="price">${bill.price}</div>
						<div className="buttons">
							<div
								className="paid"
								onClick={this.props.changeBillStatus.bind(null, index)}
							>
								<i className="fas fa-check"></i>
							</div>
							<div
								className="delete"
								onClick={this.props.deleteBill.bind(null, index)}
							>
								<i className="far fa-trash-alt"></i>
							</div>
						</div>
					</li>
				);
			});
		} else {
			return (
				<li className="bill">
					<div className="no-bills">No bills. Add a new bill !</div>
				</li>
			);
		}
	};

	billsTotal = () => {
		let total = parseInt('0');
		this.props.allBills.map(bill => {
			total += parseInt(bill.price);
		});
		return total;
	};

	render() {
		return (
			<React.Fragment>
				<div className="total-bills">
					<div className="text">Total Amount: </div>
					<div className="number">$ {this.billsTotal()}</div>
				</div>
				<section id="AllBills">
					<div className="container">
						<ul className="bills-list">{this.showAllBills()}</ul>
					</div>
				</section>
			</React.Fragment>
		);
	}
}
