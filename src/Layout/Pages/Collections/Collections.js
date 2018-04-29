import React, { Component } from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

var request = require("request");

class Collections extends Component {

	state = {
		ready: false
	};

	constructor() {
		super();
		this.unsplashCallback = this.unsplashCallback.bind(this);
	}

	callUnsplashCollection = () => {
		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/collections/featured',
			qs: { client_id: 'd9dbf001ba658ce6d8172a427b1a7a3e986aa970d038aade36ff7c54b05ffb0e' }
		};


		request(options, this.unsplashCallback);
	}

	unsplashCallback = (error, response, body) => {
		let unsplashResponse;
		if (error) throw new Error(error);
		unsplashResponse = JSON.parse(body);

		this.setState({ ready: true });
		this.displayCollectionsHandler(unsplashResponse);
	}

	displayCollectionsHandler = (unsplashResponse) => {
		this.ready = unsplashResponse.map((collection, index) => {
			let rowNumber;
			index <= 4 ? rowNumber = 'firstRow' : rowNumber = 'secondRow';
			return (
				<div className={rowNumber}>
					<Collection
						collectionName = {collection.title}
						cover = {collection.cover_photo.urls.small}
						topThumbnail = {collection.preview_photos[1].urls.thumb}
						bottomThumbnail = {collection.preview_photos[2].urls.thumb}
						key = {index}
					/>
				</div>
			);
		});
	};

	ready = '';

	componentDidMount() {
		this.callUnsplashCollection();
	}

	render() {
		if (this.state.ready === true) {
			return (
				<div className='Collections'>
					{this.ready}
				</div>
			);
		}
		else {
			return <Spinner />;
		}
	}
};

export default Collections;