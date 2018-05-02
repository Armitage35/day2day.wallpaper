import React from 'react';
import Photo from './Photo/Photo.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

const Gallery = (props) => {

	console.log(props.unsplashResponse);
	console.log(props.unsplashResponse[0].title);

	if (props.unsplashResponse[0].title !== undefined || props.unsplashResponse !== undefined) {
		console.log('show pictures');
		let pictures = props.unsplashResponse.map((photo, index) => {
			return <Photo 
				url = {photo.urls.small}
				key = {index}
			/>;
		});
		return pictures;
	}
	else {
		console.log('spinner');
		return <Spinner />;
	}
};

export default Gallery;
