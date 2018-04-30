import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	let collectionList = [props.popularCollectionsList][0];

	if (collectionList !== undefined) {
		collectionList = collectionList.map((collection, key) => {
			if (key < 4) {
				return (
				// eslint-disable-next-line
					<p key={key} className='popularCollectionsList'>{collection}</p>
				);
			}
		});
	}

	return (
		<Aux>
			<p className='popularIntro'>Popular collections</p>
			{collectionList}
		</Aux>
	);
};

export default PopularCollections;
