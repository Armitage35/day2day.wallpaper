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
		this.unsplashCollectionCallback = this.unsplashCollectionCallback.bind(this);
		this.unsplashRandomCallback = this.unsplashRandomCallback.bind(this);

	}

	state = {
		ready: false,
		unsplashCollection: '',
		unsplashPictures: null,
	};

	// to do: remove those fuckers!!
	unsplashResponse;
	popularCollectionsList;

	unsplashOptions = {
		method: 'GET',
		qs: { client_id: 'd9dbf001ba658ce6d8172a427b1a7a3e986aa970d038aade36ff7c54b05ffb0e' }
	};

	callUnsplashCollection = () => {
		const options = { ...this.unsplashOptions,
			url: 'https://api.unsplash.com/collections/featured'
		};

		request(options, this.unsplashCollectionCallback);
	}

	unsplashCollectionCallback = (error, response, body) => {
		if (error) throw new Error(error);
		this.unsplashResponse = JSON.parse(body);

		this.popularCollectionsList = this.unsplashResponse.map((collection, index) => {
			return collection.title;
		});

		this.setState({ ready: true, unsplashCollection: this.unsplashResponse });
	}

	callUnsplashRandom = () => {
		const options = { ...this.unsplashOptions,
			url: 'https://api.unsplash.com/photos'
		};

		request(options, this.unsplashRandomCallback);
	}

	unsplashRandomCallback = (error, response, body) => {
		if (error) throw new Error(error);

		console.log('unsplashRandomCallback');

		this.unsplashResponse = JSON.parse(body);
		this.setState({ ready: true, unsplashPictures: this.unsplashResponse });
	}

	componentWillReceiveProps(next) {
		switch (next.activeView) {
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
		if (this.state.ready === false) {
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
						unsplashCollection = {this.state.unsplashCollection}
						unsplashPictures = {this.state.unsplashPictures}
					/>
				</div>
			</Aux>
			);
		}
	}
};

export default Layout;
