import React from 'react';
import DownloadIcon from './PhotoButtons/icons/DownloadIcon.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';
import './PhotoDetails.css';

const PhotoDetails = (props) => {

	const buttonClasses = 'bttn-unite bttn-md bttn-primary';

	const setAsWallpaper = () => {
		return <button className={buttonClasses}>Set as wallpaper</button>;
	};

	if (props.activePicture === null) {
		return <Spinner />;
	}
	else {
		const downloadButton = () => {
			return <a href={props.activePicture.links.download + '?utm_source=day2day.wallpaper&utm_medium=referral'} target='_blank'><button className={buttonClasses}> {DownloadIcon}</button></a>;
		};

		const backgroundStyle = {
			backgroundImage: 'url("' + props.activePicture.urls.regular + '")'
		};

		return (
			<div className='PhotoDetails' style={backgroundStyle}>
				<div className='actionButtons'>
					{downloadButton()}
					{setAsWallpaper()}
				</div>
			</div>
		);

	}
};

export default PhotoDetails;
