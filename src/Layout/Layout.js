import React from 'react';
import Aux from '../hoc/Aux.js';
import Backdrop from './Backdrop/Backdrop.js';
import Toolbar from './Toolbar/Toolbar.js';
import Pages from './Pages/Pages.js';
import './Layout.css';

const Layout = (props) => {
	return (
		<Aux>
			<Toolbar 
				activeView = {props.activeView}
				viewHandler = {props.viewHandler}
			/>
			<Backdrop 
				activeBackdrop = {props.activeBackdrop} 
			 	backdropAuthor = {props.backdropAuthor}
			/>
			<div className='pageContent'>
				<Pages 
					activeView = {props.activeView}
				/>
			</div>
		</Aux>
	);
};

export default Layout;
