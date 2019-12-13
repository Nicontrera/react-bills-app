import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Counter from './components/counter/Compmierda.js';
//import Immutable from './components/Immutable/Immutable.js';
import BillsApp from './components/BillsApp/BillsApp.js';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'container'}>
				<BillsApp />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
