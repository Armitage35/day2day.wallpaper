import React from 'react';
import './PhotoDetails.css';
import heart from './PhotoButtons/icons/heart.js';
import Download from './PhotoButtons/icons/Download.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

const PhotoDetails = (props) => {

	const actions = [Download, heart, 'Set as wallpaper'];

	let buttons = actions.map((button, index) => {
		return <button className="bttn-unite bttn-md bttn-primary" key={index}>{button}</button>;
	});

	if (props.activePicture === null) {
		return <Spinner />;
	}
	else {
		const style = {
			backgroundImage: 'url("' + props.activePicture.urls.regular + '")'
		};
		return (
			<div className='PhotoDetails' style={style}>
				<div className='actionButtons'>
					{buttons}
				</div>
			</div>
		);

	}
};

export default PhotoDetails;
