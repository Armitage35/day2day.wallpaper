import React from 'react';
import Photo from './Photo/Photo.js';

const Gallery = ( props ) => {
	console.log('gallery');
	console.log(props.unsplashResponse);
	return (
		<Photo />
	);
};

export default Gallery;
