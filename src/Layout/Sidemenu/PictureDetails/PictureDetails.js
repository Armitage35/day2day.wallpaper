import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PictureDetails.css';

const PictureDetails = (props) => {

	let values = [{ label: 'Published on', value: props.picturePublicationDate }, {
		label: 'Dimensions',
		value: props.pictureDimensions
	}, {
		label: 'Views',
		value: props.pictureViews
	}, {
		label: 'Downloads',
		value: props.pictureDownloads
	}];

	let pictureMetaData = values.map((information, index) => {
		return (
			<Aux key={index}>
				<p className='label'>{information.label}</p>
				<p className='pictureDetailsValue'>{information.value}</p>
			</Aux>
		);
	});

	return (
		<Aux>
			{pictureMetaData}
		</Aux>
	);
};

export default PictureDetails;
