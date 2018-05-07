import React, { Component } from 'react';
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
		this.unsplashFeaturedCollectionCallback = this.unsplashFeaturedCollectionCallback.bind(this);
		this.unsplashRandomPicturesCallback = this.unsplashRandomPicturesCallback.bind(this);
	}

	state = {
		ready: false,
		unsplashCollection: '',
		unsplashPictures: null,
	};

	unsplashResponse;
	popularCollectionsList;

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

	// handle curated pictures
	unsplashFeaturedCollectionCallback = (error, response, body) => {
		if (error) throw new Error(error);
		this.unsplashResponse = JSON.parse(body);

		this.popularCollectionsList = this.unsplashResponse.map((collection, index) => {
			return collection.title;
		});

		this.setState({ ready: true, unsplashCollection: this.unsplashResponse });
	}


	unsplashRandomPicturesCallback = (error, response, body) => {
		if (error) throw new Error(error);

		this.unsplashResponse = JSON.parse(body);
		this.setState({ ready: true, unsplashPictures: this.unsplashResponse });
	}

	detailedPictureHandler = (event) => {
		console.log('yolo');
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
						popularCollectionsList = {this.popularCollectionsList}
						activeView = {this.props.activeView} 

					/>
					<Pages 
						activeView = {this.props.activeView}
						unsplashCollection = {this.state.unsplashCollection}
						unsplashPictures = {this.state.unsplashPictures}
						detailedPictureHandler = {this.detailedPictureHandler}
					/>
				</div>
			</React.Fragment>
			);
		}
	}
};

export default Layout;
