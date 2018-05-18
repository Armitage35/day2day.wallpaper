import React from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';
import Spinner from '../../../UtilitiesComponents/Spinner.js';

const Collections = (props) => {

	let collections,
		label;

	// Label handling for explore view
	props.label !== undefined ? label = <p className='exploreLabel'>{props.label}</p> : label = '';

	if (props.unsplashCollection === null) {
		return <Spinner />;
	}
	else {
		collections = props.unsplashCollection.map((collection, index) => {
			let float;
			float = index === 4 && props.label === undefined ? float = 'none' : float = 'left';

			return (
				<Collection
					collectionName = {collection.title}
					cover = {collection.cover_photo.blob}
					detailedCollectionHandler = {props.detailedCollectionHandler}
					float = {float}
					id = {collection.id}
					topThumbnail = {collection.preview_photos[1].blob}
					bottomThumbnail = {collection.preview_photos[2].blob}
					key = {index}
				/>
			);
		});
	}

	return (
		<div className='Collections'>
			{label}
			<div className='galleryRows'>{collections}</div>
		</div>
	);
};

export default Collections;
