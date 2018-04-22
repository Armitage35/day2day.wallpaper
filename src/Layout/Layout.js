import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Backdrop from './Backdrop/Backdrop.js';
import Aux from '../hoc/Aux.js';

const Layout = (props) => {
	return (
		<Aux>
			<Toolbar 
				activeView = {props.activeView}
				viewHandler={props.viewHandler}
			/>
			<Backdrop 
				activeBackdrop = {props.activeBackdrop} 
				backdropAuthor = {props.backdropAuthor}
			/>
		</Aux>
	);
};

export default Layout;
