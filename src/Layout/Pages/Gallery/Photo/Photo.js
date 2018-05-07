import React from 'react';
import './Photo.css';
// import Aux from '../../../../hoc/Aux.js';

const Photo = ( props ) => {
	
	const style = {
		backgroundImage: 'url(' + props.url + ')',
		float: props.float
	};
	
	return <div className={props.cssClass} id={props.photoId} style={style}></div>;
};

export default Photo;
