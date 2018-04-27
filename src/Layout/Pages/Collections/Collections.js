import React, { Component } from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';

var request = require("request");

class Collections extends Component {

	collectionName = 'yolo';

	callUnsplashCollection = () => {
		let collectionName;
		
		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/collections/featured',
			qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' }
		};

		request(options, function(error, response, body) {
			if (error) throw new Error(error);
			
			collectionName = JSON.parse(body)[0].title;
			console.log(collectionName);
			collectionHandler(JSON.parse(body));
		});
		
		const collectionHandler = (unsplashResponse) => {
			console.log(unsplashResponse);
		};
	}


	componentDidMount() {
		this.callUnsplashCollection();
	}

	render() {
		return (
			<div className='Collections'>
			<div className='firstRow'>
				<Collection 
					collectionName = {this.collectionName}
				/>
			</div>
			<div className='secondRow'>
			</div>
		</div>
		);
	}
};


export default Collections;
