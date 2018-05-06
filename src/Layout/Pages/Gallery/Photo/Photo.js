import React from 'react';
import './Photo.css';
import Aux from '../../../../hoc/Aux.js';

const Photo = ( props ) => {
	
	const style = {
		backgroundImage: 'url(' + props.url + ')',
		float: props.float
	};
	
	return (
		<Aux>
			<div className={props.cssClass} style={style}></div>
		</Aux>
	);
};

export default Photo;
