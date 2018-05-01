import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
	return (
		<div className='backdrop'>
			<img 
				src={props.activeBackdrop} 
				alt={props.backdropAuthor} 
			/>
		</div>
	);
};

export default Backdrop
