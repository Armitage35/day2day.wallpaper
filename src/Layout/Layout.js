import React, { Component } from 'react';
import Backdrop from './Backdrop/Backdrop.js';
import Toolbar from './Toolbar/Toolbar.js';
import Pages from './Pages/Pages.js';
import Sidemenu from './Sidemenu/Sidemenu.js';
import Spinner from '../UtilitiesComponents/Spinner.js';
import './Layout.css';

const request = require('request');

class Layout extends Component {
	constructor() {
		super();
		this.unsplashFeaturedCollectionCallback = this.unsplashFeaturedCollectionCallback.bind(this);
		this.unsplashRandomPicturesCallback = this.unsplashRandomPicturesCallback.bind(this);
	}

	state = {
		ready: false,
		unsplashCollection: '',
		unsplashPictures: null
	};

	unsplashResponse;
	popularCollectionsList;
	unsplashUniquePicture;

	unsplashOptions = {
		method: 'GET',
		qs: { client_id: 'd9dbf001ba658ce6d8172a427b1a7a3e986aa970d038aade36ff7c54b05ffb0e' }
	};

	callUnsplashFeaturedCollection = () => {
		const options = { ...this.unsplashOptions,
			url: 'https://api.unsplash.com/collections/featured'
		};

		request(options, this.unsplashFeaturedCollectionCallback);
	}

	// handle featured pictures
	unsplashFeaturedCollectionCallback = (error, response, body) => {
		if (error) throw new Error(error);
		this.unsplashResponse = JSON.parse(body);

		this.popularCollectionsList = this.unsplashResponse.map((collection, index) => {
			return collection.title;
		});

		this.setState({ ready: true, unsplashCollection: this.unsplashResponse });
	}

	// handle random pictures
	callUnsplashRandomPictures = () => {
		const options = {
			...this.unsplashOptions,
			qs: {
				...this.unsplashOptions.qs,
				count: '20',
				orientation: 'landscape'
			},
			url: 'https://api.unsplash.com/photos'
		};

		request(options, this.unsplashRandomPicturesCallback);
	}

	unsplashRandomPicturesCallback = (error, response, body) => {
		if (error) throw new Error(error);

		this.unsplashResponse = JSON.parse(body);
		this.setState({ ready: true, unsplashPictures: this.unsplashResponse });
	}

	componentWillReceiveProps(next) {
		switch (next.activeView) {
			case 'collections':
				this.callUnsplashFeaturedCollection();
				break;
			case 'gallery':
				this.callUnsplashRandomPictures();
				break;
			case 'explore':
				this.callUnsplashRandomPictures();
				this.callUnsplashFeaturedCollection();
				break;
			case 'detailedPhoto':
				break;
			default:
				this.callUnsplashRandomPictures();
				this.callUnsplashFeaturedCollection();
		}
	}

	render() {
		if (this.state.ready === false) {
			return <Spinner />;
		}
		else {
			return (
				<React.Fragment>
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
							activePicture = {this.props.activePicture}
							activeView = {this.props.activeView}
							popularCollectionsList = {this.popularCollectionsList}

						/>
						<Pages
							activeView = {this.props.activeView}
							activePicture = {this.props.activePicture}
							unsplashCollection = {this.state.unsplashCollection}
							unsplashPictures = {this.state.unsplashPictures}
							detailedPictureHandler = {this.props.detailedPictureHandler}
						/>
					</div>
				</React.Fragment>
			);
		}
	}
};

export default Layout;
