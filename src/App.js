import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout.js';

var request = require("request");

class App extends Component {

	state = {
		activeBackdrop: '',
		backdropAuthor: '',
		activeCollection: '',
		activePicture: null,
		activeView: 'explore',
	}

	activeViewHandler = (event) => {
		let activeView = this.state.activeView;
		activeView = event.target.id;
		this.setState({ activeView: activeView });
	}

	unsplashOptions = {
		method: 'GET',
		qs: { client_id: 'd9dbf001ba658ce6d8172a427b1a7a3e986aa970d038aade36ff7c54b05ffb0e' }
	};

	activeBackdropHandler = () => {
		let unsplashBackdrop,
			backdropAuthor,
			options = {
				method: 'GET',
				url: 'https://api.unsplash.com/photos/random',
				qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' }
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
		this.setState({ activeView: 'detailedPhoto' });

		this.callUnsplashUniquePicture(event.target.id);
	}

	// handle unique (individual) picture
	callUnsplashUniquePicture = (photoID) => {
		const options = {
			...this.unsplashOptions,
			url: 'https://api.unsplash.com/photos/' + photoID
		};

		request(options, this.callUnsplashUniquePictureCallback);
	};

	callUnsplashUniquePictureCallback = (error, response, body) => {
		if (error) throw new Error(error);

		this.setState({activePicture: JSON.parse(body)});
	};

	componentDidMount() {
		this.activeBackdropHandler();
	}


	render() {
		return (
			<div className="App">
				<Layout
					activeBackdrop = {this.state.activeBackdrop}
					activeView = {this.state.activeView}
					activePicture = {this.state.activePicture}
					backdropAuthor = {this.state.backdropAuthor}
					viewHandler = {this.activeViewHandler}
					detailedPictureHandler = {this.detailedPictureHandler}
				/>
			</div>
		);
	}
}

export default App;
