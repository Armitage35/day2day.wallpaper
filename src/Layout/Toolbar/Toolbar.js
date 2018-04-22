import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => {
	return (
		<div className='toolbar'>
			<p className='active'>Explore</p>
			<p>Collections</p>
			<p>Gallery</p>
		</div>
	);
};

export default Toolbar;
