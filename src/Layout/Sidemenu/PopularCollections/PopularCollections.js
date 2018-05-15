import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	let collectionList = [props.popularCollectionsList][0];

	if (collectionList !== undefined) {
		collectionList = collectionList.map((collection, key) => {
			if (key < 4) {
				// here we use an array where [0] is the id and [1] the collection's name. More on that in Layout.js
				return (<p key={key} className='popularCollectionsList' onClick={props.detailedCollectionHandler} id={collection[0]} data-collection_name={collection[1]}>{collection[1]}</p>);
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
