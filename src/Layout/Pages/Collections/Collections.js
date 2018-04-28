import React, { Component } from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';

var request = require("request");

class Collections extends Component {

	state = {
		collectionName: '',
		cover: '',
		topThumbnail: '',
		bottomThumbnail: '',
		ready: false
	};

	callUnsplashCollection = () => {
		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/collections/featured',
			qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' }
		};

		request(options, function(error, response, body) {
			if (error) throw new Error(error);
			collectionHandler(JSON.parse(body));
		});

		const collectionHandler = (unsplashResponse) => {
			console.log(unsplashResponse);
			let collectionName = unsplashResponse[0].title,
				cover = unsplashResponse[0].cover_photo.urls.small,
				topThumbnail = unsplashResponse[0].preview_photos[1].urls.thumb,
				bottomThumbnail = unsplashResponse[0].preview_photos[2].urls.thumb;

			this.setState({
				collectionName: collectionName,
				cover: cover,
				topThumbnail: topThumbnail,
				bottomThumbnail: bottomThumbnail,
				ready: true
			});
		};
	}

	Collections = () => {
		return(
			<div className='Collections'>
				<div className='firstRow'>
					<Collection 
						collectionName = {this.state.collectionName}
						cover = {this.state.cover}
						topThumbnail = {this.state.topThumbnail}
						bottomThumbnail = {this.state.bottomThumbnail}
					/>
				</div>
				<div className='secondRow'>
					<Collection 
						collectionName = {this.state.collectionName}
						cover = {this.state.cover}
						topThumbnail = {this.state.topThumbnail}
						bottomThumbnail = {this.state.bottomThumbnail}
					/>
				</div>
			</div>
		)
	};

	componentDidMount() {
		this.callUnsplashCollection();
	}

	render() {
		if (this.state.ready === true) {
			return (
				this.Collections()
			);
		} else {
			return <p>YOLO</p>;
		}
	}
};


export default Collections;
