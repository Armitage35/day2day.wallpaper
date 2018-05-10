import React from 'react';
import './Title.css';
import Aux from '../../../hoc/Aux.js';

const Title = (props) => {

	const titleOptions = {
		gallery: 'Popular pictures',
		collections: 'Most popular',
		explore: 'Day2Day Wallpaper'
	};
	
	let title;
	props.activeView !== 'detailedPhoto' ? title = titleOptions[props.activeView] : title = props.pictureAuthor;

	return (
		<Aux>
			<p className='title'>{title}</p>
			<hr className='titleSeparator' />
		</Aux>
	);
};

export default Title;
