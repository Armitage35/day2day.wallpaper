import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout.js';

class App extends Component {
	
	state = {
		activeView: 'explore',
		activeCollection: '',
		activePicture: ''
	}
	
	activeViewHandler = (event) => {
		let activeView = this.state.activeView;
		activeView = event.target.id;
		this.setState({activeView: activeView});
	}
	
	render() {
		return (
			<div className="App">
				<Layout 
					viewHandler = {this.activeViewHandler}
					activeView = {this.state.activeView}
				/>
			</div>
		);
	}
}

export default App;
