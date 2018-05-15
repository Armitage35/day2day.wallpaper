import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout.js';
import UnsplashOptions from './Keys/UnsplashOptions.js';

const request = require('request');

class App extends Component {

	state = {
		activeBackdrop: null,
		backdropAuthor: null,
		activeCollection: null,
		activeCollectionName: null,
		activePicture: null,
		activePictureDownloadLink: null,
		activeView: 'explore', // the default view when first loading the app
	}

	activeViewHandler = (event) => {
		let activeView = this.state.activeView;
		activeView = event.target.id;
		this.setState({ activeView: activeView });
		if (event.target.id === 'gallery') {
			this.resetActiveCollection();
		}
	}

	resetActiveCollection = () => {
		this.setState({ activeCollection: null, activeCollectionName: null, activePictureDownloadLink: null });
	}

	activeBackdropHandler = () => {
		let unsplashBackdrop,
			backdropAuthor,
			optionsForBackdrop = {
				...UnsplashOptions,
				url: 'https://api.unsplash.com/photos/random',
			};

		request(optionsForBackdrop, function(error, response, body) {
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
		this.setState({ activeView: 'detailedPhoto', activePicture: null });

		this.callUnsplashUniquePicture(event.target.id);
	}

	detailedCollectionHandler = (event) => {
		let collectionName = event.target.getAttribute('data-collection_name');
		this.setState({ activeCollection: event.target.id, activeView: 'gallery', activeCollectionName: collectionName });
	}

	// handle unique (individual) picture
	callUnsplashUniquePicture = (photoID) => {
		const optionsForIndividualPicture = {
			...UnsplashOptions,
			url: 'https://api.unsplash.com/photos/' + photoID
		};

		const optionsToGetPictureDownloadLink = {
			...UnsplashOptions,
			url: 'https://api.unsplash.com/photos/' + photoID + '/download',
		};

		// getting the picture's download link
		request(optionsToGetPictureDownloadLink, this.callUnsplasPictureDownloadLink);

		// getting every other picture's information
		request(optionsForIndividualPicture, this.callUnsplashUniquePictureCallback);
	};

	callUnsplashUniquePictureCallback = (error, response, body) => {
		if (error) throw new Error(error);

		this.setState({ activePicture: JSON.parse(body) });
	};

	callUnsplasPictureDownloadLink = (error, response, body) => {
		if (error) throw new Error(error);

		this.setState({ activePictureDownloadLink: JSON.parse(body).url });
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
					activeCollection = {this.state.activeCollection}
					activeCollectionName = {this.state.activeCollectionName}
					activePicture = {this.state.activePicture}
					activePictureDownloadLink = {this.state.activePictureDownloadLink}
					backdropAuthor = {this.state.backdropAuthor}
					detailedCollectionHandler = {this.detailedCollectionHandler}
					detailedPictureHandler = {this.detailedPictureHandler}
					viewHandler = {this.activeViewHandler}
				/>
			</div>
		);
	}
}

export default App;
