import React from 'react';
import Photo from './Photo/Photo.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';
import './Gallery.css';

const Gallery = (props) => {

	let label,
		photoClass;

	props.label !== undefined ? label = <p className='exploreLabel'>{props.label}</p> : label = '';
	props.label !== undefined ? photoClass = 'explorePhoto' : photoClass = 'photo';

	if (props.unsplashPictures !== null) {
		let pictures = props.unsplashPictures.map((photo, index) => {
			let float;
			float = index === props.unsplashPictures.length / 2 - 1 ? float = 'none' : float = 'left';
			return <Photo 
				cssClass = {photoClass}
				float = {float}
				url = {photo.urls.small}
				key = {index}
				photoId = {photo.id}
				detailedPictureHandler = {props.detailedPictureHandler}
			/>;
		});
		return (
			<div className='Gallery'>
				{label}
				<div className='galleryRows'>{pictures}</div>
			</div>);
	}
	else {
		return <Spinner />;
	}
};

export default Gallery;
