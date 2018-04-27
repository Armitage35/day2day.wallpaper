import React from 'react';
import Collection from './Collection/Collection.js';
import './Collections.css';

const Collections = () => {
	return (
		<div className='Collections'>
			<div className='firstRow'>
				<Collection />
			</div>
			<div className='secondRow'>
				<Collection />
			</div>
		</div>
	);
};

export default Collections;
