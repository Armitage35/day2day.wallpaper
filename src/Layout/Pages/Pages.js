import React from 'react';
import Aux from '../../hoc/Aux.js';
import Collections from './Collections/Collections.js';
import Gallery from './Gallery/Gallery.js';
import Sidemenu from '../Sidemenu/Sidemenu.js';

const Pages = (props) => {
	if (props.activeView === 'collections') {
		return (
			<Aux>
				<Sidemenu />
				<Collections /> 
			</Aux>
		);
	} else {
		return (
			<Gallery />
		);
	}
};

export default Pages;
