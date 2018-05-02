import React, { Component } from 'react';
import Aux from '../hoc/Aux.js';
import Backdrop from './Backdrop/Backdrop.js';
import Toolbar from './Toolbar/Toolbar.js';
import Pages from './Pages/Pages.js';
import Sidemenu from './Sidemenu/Sidemenu.js';
import Spinner from '../UtilitiesComponents/Spinner.js';
import './Layout.css';

var request = require("request");

class Layout extends Component {
	constructor() {
		super();
		this.unsplashCallback = this.unsplashCallback.bind(this);
	}

	state = {
		ready: false
	};

	unsplashResponse;
	popularCollectionsList;


	callUnsplashCollection = () => {
		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/collections/featured',
			qs: { client_id: 'd9dbf001ba658ce6d8172a427b1a7a3e986aa970d038aade36ff7c54b05ffb0e' }
		};

		request(options, this.unsplashCallback);
	}

	unsplashCallback = (error, response, body) => {
		if (error) throw new Error(error);
		this.unsplashResponse = JSON.parse(body);

		this.popularCollectionsList = this.unsplashResponse.map((collection, index) => {
			return collection.title;
		});

		this.setState({ ready: true });
	}

	callUnsplashRandom = () => {
		const options = {
			method: 'GET',
			url: 'https://api.unsplash.com/photos',
			qs: { client_id: '87d65f33bedf2944ee1146f5a30ff235a6b37b4faa403b0b877f02f4fbb36a40' }
		};

		request(options, function(error, response, body) {
			if (error) throw new Error(error);
			this.unsplashResponse = JSON.parse(body);
		});
	}

	componentWillReceiveProps(next) {
		switch (this.props.activeView) {
			case 'collections':
				this.callUnsplashCollection();
				break;
			case 'gallery':
			case 'explore':
				this.callUnsplashRandom();
				break;
			default:
				console.log('default switch... how weird!');
		}
	}

	render() {
		if (this.state.ready === 'false') {
			return <Spinner />;
		}
		else {
			return (
				<Aux>
				<Toolbar 
					activeView = {this.props.activeView}
					viewHandler = {this.props.viewHandler}
				/>
				<Backdrop 
					activeBackdrop = {this.props.activeBackdrop} 
				 	backdropAuthor = {this.props.backdropAuthor}
				/>
				<div className='pageContent'>
					<Sidemenu 
						popularCollectionsList = {this.popularCollectionsList}
					/>
					<Pages 
						activeView = {this.props.activeView}
						unsplashResponse = {this.unsplashResponse}
					/>
				</div>
			</Aux>
			);
		}
	}
};

export default Layout;
