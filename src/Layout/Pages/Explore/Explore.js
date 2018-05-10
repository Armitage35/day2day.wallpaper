import React from 'react';
import Collections from '../Collections/Collections.js';
import Gallery from '../Gallery/Gallery.js';
import './Explore.css';

const Explore = (props) => {
	return (
		<div className='Explore'>
			<Collections 
				label = 'Collections'
				unsplashCollection = {props.unsplashCollection}
			/>
			<Gallery 
				label = 'Photos'
				unsplashPictures = {props.unsplashPictures}
				detailedPictureHandler = {props.detailedPictureHandler}
			/>
		</div>
	);
};

export default Explore;
