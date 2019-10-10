import React, { Component } from 'react';
import './Master.sass';
import Layout from './Layout/Layout.js';
import UnsplashOptions from './Keys/UnsplashOptions.js';
import FetchBlob from './UtilitiesComponents/FetchBlob';
import ReactGA from 'react-ga';

const request = require('request');

ReactGA.initialize('UA-113962651-3');

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
		ReactGA.pageview(activeView);
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

			const backdropResponse = JSON.parse(body);

			backdropAuthor = backdropResponse.user.name;
			FetchBlob(backdropResponse.urls.regular).then(blob => {
				unsplashBackdrop = blob;
				updateBackdrop();
			})
		});

		const updateBackdrop = () => {
			this.setState({ activeBackdrop: unsplashBackdrop, backdropAuthor: backdropAuthor });
		};
	}

	detailedPictureHandler = (event) => {
		ReactGA.pageview('detailed photo');
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

		const activePicture = JSON.parse(body);

		FetchBlob(activePicture.user.profile_image.large).then(blob => {
			activePicture.user.profile_image.blob = blob;
			this.setState({ activePicture, activePictureDownloadLink: activePicture.links.html});
		});
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
