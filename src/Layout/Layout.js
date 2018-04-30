import React from 'react';
import Aux from '../hoc/Aux.js';
import Backdrop from './Backdrop/Backdrop.js';
import Toolbar from './Toolbar/Toolbar.js';
import Pages from './Pages/Pages.js';
import Sidemenu from './Sidemenu/Sidemenu.js';
import './Layout.css';

var request = require("request");

const Layout = (props) => {
	let unsplashResponse,
		popularCollectionsList;

	const options = {
		method: 'GET',
		url: 'https://api.unsplash.com/collections/featured',
		qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' },
	};

	request(options, function(error, response, body) {
		if (error) throw new Error(error);
		props.activeView === 'collections' ? unsplashResponse = JSON.parse(body) : unsplashResponse = '';

		popularCollectionsList = unsplashResponse.map((collection, index) => {
			return collection.title;
		});

		console.log(popularCollectionsList);
	});


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
				<Sidemenu 
					popularCollectionsList = {popularCollectionsList}
				/>
				<Pages 
					activeView = {props.activeView}
					unsplashResponse = {unsplashResponse}
				/>
			</div>
		</Aux>
	);
};

export default Layout;
