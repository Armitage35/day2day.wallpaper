import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = ( props ) => {

	let collectionList = [props.popularCollectionsList][0];

	if (collectionList !== undefined) {
		collectionList = collectionList.map((collection, key) => {
			if (key < 4) {
				return (<p key={key} className='popularCollectionsList'>{collection}</p>);
			}
			else { return '' }
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
