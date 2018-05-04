import React from 'react';
import Title from './Title/Title.js';
import PopularCollections from './PopularCollections/PopularCollections.js';
import './Sidemenu.css';

const Sidemenu = ( props ) => {
	
	const titleOptions = {
		gallery: 'Popular pictures',
		collections: 'Most popular'
	};
	
	return (
		<div className='sidemenu'>
			<Title 
				titleName = {titleOptions[props.activeView]}
			/>  
			<PopularCollections
				popularCollectionsList = { props.popularCollectionsList }
			/>
		</div>
	);
};

export default Sidemenu;
