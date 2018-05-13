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
			float = index === 4 && props.label !== undefined ? float = 'none' : float = 'left';

			return (
				<Collection
					collectionName = {collection.title}
					float = {float}
					cover = {collection.cover_photo.urls.small}
					id = {collection.title.replace(/ /g,"_")}
					topThumbnail = {collection.preview_photos[1].urls.thumb}
					bottomThumbnail = {collection.preview_photos[2].urls.thumb}
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
