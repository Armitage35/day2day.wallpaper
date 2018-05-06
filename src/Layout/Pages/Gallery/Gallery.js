import React from 'react';
import Photo from './Photo/Photo.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';
import './Gallery.css';

const Gallery = (props) => {

	if (props.unsplashPictures !== undefined) {
		let pictures = props.unsplashPictures.map((photo, index) => {
			let float;
			float = index === 4 ? float = 'none' : float = 'left';
			return <Photo 
				float = {float}
				url = {photo.urls.thumb}
				key = {index}
			/>;
		});
		return (
			<div className='Gallery'>
				<div className='galleryRows'>{pictures}</div>
			</div>);
	}
	else {
		return <Spinner />;
	}
};

export default Gallery;
