import React, { Component } from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';

var request = require("request");

class Collections extends Component {

	state = {
		ready: false
	};

	callUnsplashCollection = () => {
		console.log('start');

		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/collections/featured',
			qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' }
		};

		let unsplashResponse;

		request(options, function(error, response, body) {
			if (error) throw new Error(error);
			unsplashResponse = JSON.parse(body);
			console.log(unsplashResponse);
			this.unsplashCallback();
		});
	}

	unsplashCallback = (unsplashResponse) => {
		this.setState({ ready: true });
		// this.displayCollectionsHandler(unsplashResponse);
		console.log('merde');
		console.log(unsplashResponse);
	}

	displayCollectionsHandler = (unsplashResponse) => {
		let collections = unsplashResponse.map(collection => {
			return (
				<Collection 
				collectionName = {collection.title}
				cover = {collection.cover_photo.urls.small}
				topThumbnail = {collection.preview_photos[1].urls.thumb}
				bottomThumbnail = {collection.preview_photos[2].urls.thumb}
				key = {collection.title}
			/>);
		});
		console.log(collections);
		this.ready = collections;
	};

	ready = <p>100% ready</p>;
	notReady = <p>not ready</p>;

	componentDidMount() {
		this.callUnsplashCollection();
	}

	render() {
		if (this.state.ready === true) {
			return this.ready;
		}
		else {
			return this.notReady;
		}
	}
};

export default Collections;
