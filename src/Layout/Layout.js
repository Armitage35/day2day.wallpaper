import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';
import Backdrop from './Backdrop/Backdrop.js';
import Aux from '../hoc/Aux.js';

const Layout = (props) => {
	return (
		<Aux>
			<Toolbar 
				viewHandler={props.viewHandler}
				activeView = {props.activeView}
			/>
			<Backdrop />
		</Aux>
	);
};

export default Layout;
