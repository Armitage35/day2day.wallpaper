import React from 'react';
import Photo from './Photo/Photo.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

const Gallery = (props) => {

	console.log(props.unsplashPictures);

	if (props.unsplashPictures !== null) {
		let pictures = props.unsplashPictures.map((photo, index) => {
			console.log(photo.urls.thumb);
			return <Photo 
				url = {photo.urls.thumb}
				key = {index}
			/>;
		});
		return pictures;
	}
	else {
		return <Spinner />;
	}
};

export default Gallery;
