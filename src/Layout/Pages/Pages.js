import React from 'react';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';

const Pages = (props) => {
	switch (props.activeView) {
		case 'collections':
			return (
				<Collections 
					unsplashResponse = {props.unsplashResponse}
				/>
			);
		case 'gallery':
			return <Gallery 
				unsplashResponse = {props.unsplashResponse}
			/>;
		default:
			return <Gallery />;
	}
};

export default Pages;
