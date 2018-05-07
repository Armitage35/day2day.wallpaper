import React from 'react';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';
import Explore from './Explore/Explore.js';

const Pages = (props) => {
	switch (props.activeView) {
		case 'collections':
			return (
				<Collections 
					unsplashCollection = {props.unsplashCollection}
				/>
			);
		case 'gallery':
			return <Gallery 
				unsplashPictures = {props.unsplashPictures}
				detailedPictureHandler = {props.detailedPictureHandler}
			/>;
		case 'explore':
			return <Explore 
				unsplashCollection = {props.unsplashCollection}
				unsplashPictures = {props.unsplashPictures}
			/>;
		default:
			return <Gallery />;
	}
};

export default Pages;
