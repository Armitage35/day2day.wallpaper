import React from 'react';
import './Photo.css';
import Aux from '../../../../hoc/Aux.js';

const Photo = ( props ) => {
	
	const style = {
		backgroundImage: 'url(' + props.url + ')'
	};
	
	return (
		<Aux>
			<div className='photo' style={style}></div>
		</Aux>
	);
};

export default Photo;
