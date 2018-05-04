import React from 'react';
import Title from './Title/Title.js';
import PopularCollections from './PopularCollections/PopularCollections.js';
import './Sidemenu.css';

const Sidemenu = ( props ) => {
	
	const titleHandler = () => {
		let title;
		switch(props.activeView) {
			case 'gallery':
				title = 'Popular pictures';
				break;
			case 'collections':
				title = 'Most popular';
				break;
			default:
				title = 'day2day.wallpaper'
		}
		return title;
		
	};
	
	return (
		<div className='sidemenu'>
			<Title 
				titleName = {titleHandler()}
			/>  
			<PopularCollections
				popularCollectionsList = { props.popularCollectionsList }
			/>
		</div>
	);
};

export default Sidemenu;
