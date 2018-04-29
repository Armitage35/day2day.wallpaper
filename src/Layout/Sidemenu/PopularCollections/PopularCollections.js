import React from 'react';
import Aux from '../../../hoc/Aux.js';
import './PopularCollections.css';

const PopularCollections = (props) => {

	const popularCollectionsList = ['Through a rainy window', 'Human for scale'];
	
	return (
		<Aux>
			<p className='popularIntro'>Popular collections</p>
			{popularCollectionsList.map((collection, index) => {
				return (
					<p className='popularCollectionsList' key={index}>{collection}</p>
				);
			})}
		</Aux>
	);
};

export default PopularCollections;
