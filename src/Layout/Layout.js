import React from 'react';
import Toolbar from './Toolbar/Toolbar.js';

const Layout = (props) => {
	return (
		<div>
			<Toolbar 
				viewHandler={props.viewHandler}
				activeView = {props.activeView}
			/>
		</div>
	);
};

export default Layout;
