import React from 'react';
import Aux from '../../../hoc/Aux.js';

const PictureDetails = (props) => {
	
	let values = {
		publication: {
			label: 'Published on',
			value: props.picturePublicationDate
		}, 
		dimensions: {
			label: 'Dimensions',
			value: props.pictureDimensions
		},
		views: {
			label: 'Views',
			value: props.pictureViews
		},
		pictureDownloads: {
			label: 'Downloads',
			value: props.pictureDownloads
		}
	};
	
	let pictureMetaData =  values.map(information => {
		console.log(information);
		return (
			<Aux>
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
