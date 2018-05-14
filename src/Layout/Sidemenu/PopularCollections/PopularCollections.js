import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	let collectionList = [props.popularCollectionsList][0];

	if (collectionList !== undefined) {
		collectionList = collectionList.map((collection, key) => {
			if (key < 4) {
				return (<p key={key} className='popularCollectionsList' onClick={props.detailedCollectionHandler} id={collection[0]}>{collection[1]}</p>);
			}
			else { return null }
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
