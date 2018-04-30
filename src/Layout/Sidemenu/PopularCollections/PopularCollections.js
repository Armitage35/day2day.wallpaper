import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	// console.log(props.popularCollectionsList);
	console.log([props.popularCollectionsList]);

	return (
		<Aux>
			<p className='popularIntro'>Popular collections</p>
			{[props.popularCollectionsList].map((collectionName, index) => {
				return (
					<p className='popularCollectionsList' key={index}>{collectionName}</p>
				);
			})}
		</Aux>
	);
};

export default PopularCollections;
