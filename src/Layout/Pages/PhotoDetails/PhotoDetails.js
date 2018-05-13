import React from 'react';
import Download from './PhotoButtons/icons/Download.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';
import './PhotoDetails.css';

const PhotoDetails = (props) => {

	const setAsWallpaper = () => {
		return <button className="bttn-unite bttn-md bttn-primary"> 'Set as wallpaper'</button>;
	};

	if (props.activePicture === null) {
		return <Spinner />;
	}
	else {
		const downloadButton = () => {
			return <a href={props.activePicture.links.download} target='_blank'><button className="bttn-unite bttn-md bttn-primary"> {Download}</button></a>;
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
