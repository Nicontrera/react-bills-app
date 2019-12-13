import React, { Component } from 'react';
import Header from './Header';
import AllBills from './AllBills';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';
import update from 'immutability-helper';
import Settings from './Settings';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			themeSelectorOpen: false,
			sectionOpen: 'billsList',
			themeColor: '',
			allBills: [
				{
					business_name: 'Netflix',
					price: 350,
					status: 'unpaid',
					bill_icon:
						'https://i.pinimg.com/originals/8c/51/0e/8c510ee7de078ac4eaafdb9d15a810dd.png'
				},
				{
					business_name: 'Platzi',
					price: 90,
					status: 'unpaid',
					bill_icon:
						'https://cdn6.aptoide.com/imgs/6/c/a/6cadbf7e1329b1e7ffc63c90d24c95ab_icon.png?w=240'
				},
				{
					business_name: 'Udemy',
					price: 20,
					status: 'unpaid',
					bill_icon:
						'https://image.winudf.com/v2/image1/Y29tLnVkZW15LmFuZHJvaWQudWZiX2ljb25fMTU1Nzc3OTkyMF8wNTk/icon.png?w=170&fakeurl=1'
				},
				{
					business_name: 'Adidas',
					price: 290,
					status: 'unpaid',
					bill_icon:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAAeHh7o6Oj19fXQ0NCmpqbT09P6+vrc3Ny+vr7BwcH29vZ7e3uwsLAoKCigoKCNjY0PDw9vb29lZWVTU1MnJyeZmZnKysouLi50dHQ1NTU8PDzv7++qqqpISEhbW1uBgYEWFhZWVlaJiYlKSko6OjqAgIAaGhqUlJRAJ5+VAAAEk0lEQVR4nO2c6VriQBBFbQEhyrjgvoCo4/b+LziDBGW56XSqt1S85+cEmSrtnK+6U5W9PUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCWk0xzx1BXEZ/jDnIHURMjs2Cfu4wolE8fCVoznMHEonFAi0Z5I4lCsfmh5PcwUSguDfrnOaOJzRrC7RkmjuksBxv52fMRe6YQrIy6Cbdkc3uAl1ymzuwUIAF2inZFI+VCXaishk9WfLrgmwOrfnpl411gS65yh2jF39r8zOqZVO7QEu0Vja9V8cEtcrGaYGW3OQOVoDrAl2ynzvcxvQuGyWoTzZnDfMzymRz9Nw8QU2yabxAS9TI5lOWn57K5lqaoDHXuWN35ESeohLZDOQZapHNhTxFJbKZyjPUUtmcylPUIpsPeYrdl808d+yOdF82fXmGz7ljd+QXyOZWniJl0xYoGwusbFoDZWNhnjt2R7ovG49t1Efu2Hc4eED/6iGbz9QZ2Bn+l8oMXbiSp9hLnYSF/t1XSCNwqRuymZUh3aGL5/IUj1InUsFam1oBLqvfRvXX/0aw9edAnmIbZDPbDAnKxqOyyS6brT5Kg1t/hvIML5OntMHobjekTslmBkMagk/qlE3xhkO6Rx9WKJuqPkrTFdlU91Ga4LJ5SZ5dVaPvN+plY1mgJYFlM0mcoHWBLlEtm5oFWgLHtVTIZvTuGNIY/LAG2Tgs0BI4rtV62bgt0BIkm7E8wySycV2gS+C4lodszqLn575AS6BsdnYi7kSWTa++E32HwJXNa8z8akYlKoCyAdstVw7jJdis0fcHLZWNw6hEBfDMBu8pnYglm9oitBolshnJI9JyZiO9DU34yiaWbMQ3ohrZ9OQhaZFNk7mXLaBsWvg0Sh4RZdOYWNso5/mzXdBsqMc2ykTK0EM2sPWnhdsoD9nAca32VTY+skGtPy3cRnnIBk5QUDYWWljZaDmz8ZAN7DOkbCzEOiD+BbLx2EahPsPM2yj04MFDNnA2NKdspnPYZxhaNvmeRi2mXOGJgTyi0LLx2kbd7H99B7rUItnIz2z6q77lJ3TVo7JBsslR2ay19KI+Qw/ZwNaf5Gc2g/UjlEf0Cd2VzXSrsf4YfWgiDym7bHZ7zlFTs4ds5uh/TVfZDMBbAv6gDwrfeLEgZ2XTx5MfgWWT8cymaigiSWWTQDZogZa0XDZu26ix9V7vgGxqbgP1shnW3gS6ZdN3WB9QNoKXXK1Iuo1y+9W1XDaWymbo+otDsjmSh5TqzMZlgZZA2bzIQwosm4qnUY12LYFlA2dDA8umaHZnv6GQxC8sS/A0Cs3y2FEmG8m2uuWy2TizqZrlsRNaNuhpVJjZqLG0+zGwbKI9jWrc6PtN6MoGyiZAZePRZwhlI3mBZ0mkPhufPsPAsonVZyNfpuYdheSxjYrV1NdkZGKLwLIJPfW9kk0h/wp4QOwhm1hNfaFl41HZtFA2KMNfIJu5/PsCz0Z9/wUoGwuwsvHYRsUaxHya7AvBD15vP6TfN8GyEX+dlncQE0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhJBE/APJ/FQ2g6hswwAAAABJRU5ErkJggg=='
				},
				{
					business_name: 'Claro',
					price: 70,
					status: 'unpaid',
					bill_icon:
						'https://cdn.iconscout.com/icon/free/png-256/claro-283242.png'
				},
				{
					business_name: 'Apple',
					price: 1200,
					status: 'unpaid',
					bill_icon:
						'https://cecati71.gnomio.com/pluginfile.php/2/course/section/1/mac.png'
				},
				{
					business_name: 'Samsung',
					price: 3400,
					status: 'unpaid',
					bill_icon:
						'https://cdn.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png'
				},
				{
					business_name: 'Razer',
					price: 650,
					status: 'unpaid',
					bill_icon:
						'https://pbs.twimg.com/profile_images/1139099097841983488/zScpec9e_400x400.png'
				}
			]
		};
	}

	clickedAddBill = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
	};

	clickedThemeSelector = () => {
		this.setState(
			{
				themeSelectorOpen: !this.state.themeSelectorOpen
			},
			() => {
				console.log('holaaaaa');
			}
		);
	};

	saveBill = bill => {
		const newBills = update(this.state.allBills, {
			$push: [bill]
		});
		this.setState(
			{
				allBills: newBills,
				addBillOpen: !this.state.addBillOpen
			},
			() => {
				console.log(this.state);
			}
		);
	};

	changeBillStatus = billIndex => {
		const allBills = this.state.allBills;
		const bill = allBills[billIndex];
		if (bill.status == 'unpaid') {
			bill.status = 'paid';
		} else {
			bill.status = 'unpaid';
		}

		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});
		this.setState(newState, () => {
			console.log(this.state);
		});
	};

	deleteBill = billIndex => {
		const allBills = this.state.allBills;
		allBills.splice(billIndex, 1);
		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});
		this.setState(newState);
	};

	selectSection = selected => {
		this.setState({
			sectionOpen: selected
		});
	};

	handleThemeColor = e => {
		this.setState({
			themeColor: e.target.value
		});
	};

	render() {
		return (
			<div
				id="BillsApp"
				className={(() => {
					switch (this.state.themeColor) {
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
				<Header />

				{(() => {
					switch (this.state.sectionOpen) {
						case 'billsList':
							return (
								<React.Fragment>
									<AllBills
										allBills={this.state.allBills}
										changeBillStatus={this.changeBillStatus}
										deleteBill={this.deleteBill}
									/>
									<div className="content-background"></div>
								</React.Fragment>
							);
						case 'settings':
							return (
								<Settings
									themeSelectorOpen={this.state.themeSelectorOpen}
									clickedThemeSelector={this.clickedThemeSelector}
									handleThemeColor={this.handleThemeColor}
								/>
							);
						default:
							return null;
					}
				})()}

				<AddBill
					addBillOpen={this.state.addBillOpen}
					saveBill={this.saveBill}
					themeColor={this.state.themeColor}
				/>

				<FloatingMenu
					clickedAddBill={this.clickedAddBill}
					selectSection={this.selectSection}
					themeColor={this.state.themeColor}
				/>
			</div>
		);
	}
}
