import React from 'react';
import './Photo.css';

const Photo = ( props ) => {
	const style = {
		backgroundImage: 'url(' + props.url + ')',
		float: props.float
	};

	return <div className={props.cssClass} id={props.photoId} onClick={props.detailedPictureHandler} style={style}></div>;
};

export default Photo;
