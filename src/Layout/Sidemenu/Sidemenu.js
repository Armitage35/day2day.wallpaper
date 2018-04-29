import React from 'react';
import Title from './Title/Title.js';
import PopularCollections from './PopularCollections/PopularCollections.js';
import './Sidemenu.css';

const Sidemenu = ( props ) => {
	return (
		<div className='sidemenu'>
			<Title 
				titleName = 'Most popular'
			/>  
			<PopularCollections />
		</div>
	);
};

export default Sidemenu;
