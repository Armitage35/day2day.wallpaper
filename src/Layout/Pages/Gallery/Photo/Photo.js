import React from 'react';
import './Photo.css';
import Aux from '../../../../hoc/Aux.js';

const Photo = (props) => {
	
	const style = {
		backgroundImage: 'url(https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc77b626bf5cd59a31f9cef342d4a6bb&auto=format&fit=crop&w=1500&q=80)'
	};
	
	return (
		<Aux>
			<div className='photo' style={style}></div>
			<div className='photo' style={style}></div>
		</Aux>
	);
};

export default Photo;
