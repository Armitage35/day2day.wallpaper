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
		unsplashCollection: null,
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

		if (this.state.unsplashCollection === null) {
			request(options, this.unsplashFeaturedCollectionCallback);
		}
	}

	// handle featured pictures
	unsplashFeaturedCollectionCallback = (error, response, body) => {
		if (error) throw new Error(error);
		this.unsplashResponse = JSON.parse(body);

		this.popularCollectionsList = this.unsplashResponse.map(collection => {
			return [collection.id, collection.title];
		});

		this.setState({ ready: true, unsplashCollection: this.unsplashResponse });
	}

	optionsForRandomPictures = {
		...this.unsplashOptions,
		qs: {
			count: '20',
			orientation: 'landscape',
			...this.unsplashOptions.qs
		},
		url: 'https://api.unsplash.com/photos/'
	};


	optionsForSpecificCollection = {
		...this.unsplashOptions,
		qs: {
			count: '20',
			orientation: 'landscape',
			...this.unsplashOptions.qs
		}
	};

	// handle random pictures
	callUnsplashRandomPictures = (nextActiveCollection) => {
		if (nextActiveCollection === null || nextActiveCollection === undefined) {
			request(this.optionsForRandomPictures, this.unsplashRandomPicturesCallback);
		}
		else if (nextActiveCollection !== undefined) {
			// this removes current saved pictures in gallery so as not to have pictures jump on load
			this.setState({ unsplashPictures: null, unsplashCollection: null });

			// this needs to be here as it required the nextActiveCollection value in order to function
			this.optionsForSpecificCollection.url = 'https://api.unsplash.com/collections/' + nextActiveCollection + '/photos';

			request(this.optionsForSpecificCollection, this.unsplashRandomPicturesCallback);
		}
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
				this.callUnsplashRandomPictures(next.activeCollection);
				break;
			case 'explore':
				this.setState({ unsplashPictures: null }); //also to prevent gallery pictures from jumping
				this.callUnsplashRandomPictures();
				this.callUnsplashFeaturedCollection();
				break;
			case 'detailedPhoto':
				break;
			default:
				this.callUnsplashRandomPictures(next.activeCollection);
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
							activeCollectionName = {this.props.activeCollectionName}
							detailedCollectionHandler = {this.props.detailedCollectionHandler}
							popularCollectionsList = {this.popularCollectionsList}
						/>
						<Pages
							activeView = {this.props.activeView}
							activePicture = {this.props.activePicture}
							detailedPictureHandler = {this.props.detailedPictureHandler}
							detailedCollectionHandler = {this.props.detailedCollectionHandler}
							unsplashCollection = {this.state.unsplashCollection}
							unsplashPictures = {this.state.unsplashPictures}
						/>
					</div>
				</React.Fragment>
			);
		}
	}
};

export default Layout;
