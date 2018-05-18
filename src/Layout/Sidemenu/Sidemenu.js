import React from 'react';
import Title from './Title/Title.js';
import PopularCollections from './PopularCollections/PopularCollections.js';
import PictureDetails from './PictureDetails/PictureDetails.js';
import './Sidemenu.css';
import Spinner from '../../UtilitiesComponents/Spinner.js';

const Sidemenu = (props) => {
	if (props.activeView !== 'detailedPhoto') {
		return (
			<div className='sidemenu'>
				<Title
					activeCollectionName = {props.activeCollectionName}
					activeView = {props.activeView}
				/>
				<PopularCollections
					detailedCollectionHandler = {props.detailedCollectionHandler}
					popularCollectionsList = { props.popularCollectionsList }
				/>
			</div>
		);
	}
	else {
		if (props.activePicture === null) {
			return <Spinner />;
		}
		else {
			const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
			let transformedPicturePublicationDate = new Date(props.activePicture.created_at).toLocaleDateString('en-CA', dateOptions);

			return (
				<div className='sidemenu'>
					<Title
						activeView = {props.activeView}
						pictureAuthor = {props.activePicture.user.name}
						pictureAuthorAvatar = {props.activePicture.user.profile_image.blob}
					/>
					<PictureDetails
						picturePublicationDate = {transformedPicturePublicationDate}
						pictureDimensions = {(props.activePicture.height).toLocaleString('en-CA') + ' x ' + (props.activePicture.width).toLocaleString('en-CA')}
						pictureViews = {(props.activePicture.views).toLocaleString('en-CA')}
						pictureDownloads = {(props.activePicture.downloads).toLocaleString('en-CA')}
						unsplashLink = {props.activePicture.user.links.html}
					/>
				</div>
			);
		}
	}
};

export default Sidemenu;
