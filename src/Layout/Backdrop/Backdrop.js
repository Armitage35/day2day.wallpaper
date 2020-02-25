import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
	return (
		<div className='backdrop'>
			<img
				src={props.activeBackdrop}
				alt = { 'A picture by ' + props.backdropAuthor } />
		</div>
	);
};

export default Backdrop
