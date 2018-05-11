import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout.js';

var request = require("request");

class App extends Component {

	state = {
		activeBackdrop: '',
		backdropAuthor: '',
		activeCollection: '',
		activePicture: '',
		activeView: 'explore',
	}

	viewHandler = (newView) => {
		this.setState({ activeView: newView });
	}

	activeViewHandler = (event) => {
		let activeView = this.state.activeView;
		activeView = event.target.id;
		// this.setState({ activeView: activeView });
		this.viewHandler(activeView);
	}

	activeBackdropHandler = () => {
		let unsplashBackdrop,
			backdropAuthor,
			options = {
				method: 'GET',
				url: 'https://api.unsplash.com/photos/random',
				qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' },
			};

		request(options, function(error, response, body) {
			if (error) throw new Error(error);
			unsplashBackdrop = JSON.parse(body).urls.regular;
			backdropAuthor = JSON.parse(body).user.name;
			updateBackdrop();
		});

		const updateBackdrop = () => {
			this.setState({ activeBackdrop: unsplashBackdrop, backdropAuthor: backdropAuthor });
		};
	}

	detailedPictureHandler = (event) => {
		this.viewHandler('detailedPhoto');
	}

	componentDidMount() {
		this.activeBackdropHandler();
	}


	render() {
		return (
			<div className="App">
				<Layout 
					activeBackdrop = {this.state.activeBackdrop}
					activeView = {this.state.activeView}
					backdropAuthor = {this.state.backdropAuthor}
					viewHandler = {this.activeViewHandler}
					detailedPictureHandler = {this.detailedPictureHandler}
				/>
			</div>
		);
	}
}

export default App;
