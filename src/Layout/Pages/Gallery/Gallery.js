import React from 'react';
import Photo from './Photo/Photo.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

const Gallery = (props) => {


	if (props.unsplashResponse !== undefined || props.unsplashResponse === '') {
		let pictures = props.unsplashResponse.map(photo => {
			console.log(photo);
			return <Photo 
			url = {photo.urls}
			/>;
		});
		return pictures;
	}
	else {
		return <Spinner />;
	}
};

export default Gallery;
