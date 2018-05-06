import React from 'react';
import Collections from '../Collections/Collections.js';
import Gallery from '../Gallery/Gallery.js';
import './Explore.css';

const Explore = (props) => {
	return (
		<div className='Explore'>
			<p className='exploreLabel'>Collections</p>
				<Collections 
					unsplashCollection = {props.unsplashCollection}
				/>
			<p className='exploreLabel'>Photos</p>
				<Gallery 
					unsplashPictures = {props.unsplashPictures}
				/>
		</div>
	);
};

export default Explore;
