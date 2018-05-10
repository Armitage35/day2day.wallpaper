import React from 'react';
import './PhotoDetails.css';
import heart from './PhotoButtons/icons/heart.js';
import Download from './PhotoButtons/icons/Download.js';

const PhotoDetails = (props) => {

	const style = {
		backgroundImage: 'url("https://images.unsplash.com/photo-1508690346831-ff4d6eedd23d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eded5f9708de6103262c9b51cade5634&auto=format&fit=crop&w=750&q=80")'
	};

	const actions = [Download, heart, 'Set as wallpaper'];

	let buttons = actions.map((button, index) => {
		return <button className="bttn-unite bttn-md bttn-primary" key={index}>{button}</button>;
	});

	return (
		<div className='PhotoDetails' style={style}>
			<div className='actionButtons'>
				{buttons}
			</div>
		</div>
	);
};

export default PhotoDetails;
