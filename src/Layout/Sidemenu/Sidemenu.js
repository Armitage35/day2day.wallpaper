import React from 'react';
import Title from './Title/Title.js';
import PopularCollections from './PopularCollections/PopularCollections.js';
import PictureDetails from './PictureDetails/PictureDetails.js';
import './Sidemenu.css';

const Sidemenu = (props) => {
	if (props.activeView !== 'detailedPhoto') {
		return (
			<div className='sidemenu'>
				<Title 
					activeView = {props.activeView}
				/>  
				<PopularCollections
					popularCollectionsList = { props.popularCollectionsList }
				/>
			</div>
		);
	} else {
		return (
			<div className='sidemenu'>
				<Title 
					activeView = {props.activeView}
					pictureAuthor = 'Erik Odin'
				/>  
				<PictureDetails 
					picturePublicationDate = '20 july 2018'
					pictureDimensions = '4097 × 2731'
					pictureViews = '2,309'
					pictureDownloads = '1,854'
				/>
			</div>
		);
	}
};

export default Sidemenu;
