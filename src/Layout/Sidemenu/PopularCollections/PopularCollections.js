import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	let collectionList = [props.popularCollectionsList][0];

	if (collectionList !== undefined) {
		collectionList = collectionList.forEach(function(element) {
			return <p key={element} className='popularCollectionsList'>{element}</p>;
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
