import React from 'react';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';

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
			/>;
		case 'explore':
			return <Gallery 
				unsplashPictures = {props.unsplashPictures}
			/>;
		default:
			return <Gallery />;
	}
};

export default Pages;
