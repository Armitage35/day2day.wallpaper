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
					activeView = {props.activeView}
				/>
				<PopularCollections
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
			let transformedPicturePublicationDate = new Date(props.activePicture.created_at).toLocaleDateString('en-EN', dateOptions);

			return (
				<div className='sidemenu'>
					<Title
						activeView = {props.activeView}
						pictureAuthor = {props.activePicture.user.name}
						pictureAuthorAvatar = {props.activePicture.user.profile_image.large}
					/>
					<PictureDetails
						picturePublicationDate = {transformedPicturePublicationDate}
						pictureDimensions = {props.activePicture.height + ' x ' + props.activePicture.width}
						pictureViews = {props.activePicture.views}
						pictureDownloads = {props.activePicture.downloads}
						unsplashLink = {props.activePicture.user.links.html}
					/>
				</div>
			);
		}
	}
};

export default Sidemenu;
