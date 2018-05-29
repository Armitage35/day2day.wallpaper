import React from 'react';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';
import Explore from './Explore/Explore.js';
import PhotoDetails from './PhotoDetails/PhotoDetails.js';

const Pages = (props) => {
	switch (props.activeView) {
		case 'collections':
			return (
				<Collections
					unsplashCollection = {props.unsplashCollection}
					detailedCollectionHandler = {props.detailedCollectionHandler}
				/>
			);
		case 'gallery':
			return <Gallery
				activeView = {props.activeView}
				unsplashPictures = {props.unsplashPictures}
				detailedPictureHandler = {props.detailedPictureHandler}
			/>;
		case 'explore':
			return <Explore
				unsplashCollection = {props.unsplashCollection}
				unsplashPictures = {props.unsplashPictures}
				detailedCollectionHandler = {props.detailedCollectionHandler}
				detailedPictureHandler = {props.detailedPictureHandler}
			/>;
		case 'detailedPhoto':
			return <PhotoDetails
				activePicture = {props.activePicture}
				activePictureDownloadLink = {props.activePictureDownloadLink}
			/>;
		default:
			return <Gallery />;
	}
};

export default Pages;
