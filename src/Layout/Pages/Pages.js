import React from 'react';
import Aux from '../../hoc/Aux.js';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';

const Pages = ( props ) => {
	if (props.activeView === 'collections') {
		// console.log('unsplash response in pages prop');
		// console.log(props.unsplashResponse);
		return (
			<Aux>
				<Collections 
					unsplashResponse = {props.unsplashResponse}
				/> 
			</Aux>
		);
	} else {
		return (
			<Gallery />
		);
	}
};

export default Pages;
