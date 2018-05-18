import React, { Component } from 'react';
import Backdrop from './Backdrop/Backdrop.js';
import Toolbar from './Toolbar/Toolbar.js';
import Pages from './Pages/Pages.js';
import Sidemenu from './Sidemenu/Sidemenu.js';
import Spinner from '../UtilitiesComponents/Spinner.js';
import UnsplashOptions from '../Keys/UnsplashOptions.js';
import FetchBlob from '../UtilitiesComponents/FetchBlob.js';
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

	popularCollectionsList;

	callUnsplashFeaturedCollection = () => {
		const options = { ...UnsplashOptions,
			url: 'https://api.unsplash.com/collections/featured'
		};

		if (this.state.unsplashCollection === null) {
			request(options, this.unsplashFeaturedCollectionCallback);
		}
	}

	// handle featured pictures
	unsplashFeaturedCollectionCallback = (error, response, body) => {
		if (error) throw new Error(error);
		const unsplashCollection = JSON.parse(body);

		this.popularCollectionsList = unsplashCollection.map(collection => {
			return [collection.id, collection.title];
		});

		const blobPromises = [];
		unsplashCollection.forEach(picture => {
			blobPromises.push(FetchBlob(picture.cover_photo.urls.small).then(blob => {
				picture.cover_photo.blob = blob;
			}));

			// Only take the first two since we never show more than that
			for (let i = 0; i < 2; i++) {
				blobPromises.push(FetchBlob(picture.preview_photos[i].urls.thumb).then(blob => {
					picture.preview_photos[i].blob = blob;
				}));
			}
		});

		Promise.all(blobPromises).then(() => {
			this.setState({ ready: true, unsplashCollection });
		});
	}

	optionsForRandomPictures = {
		...UnsplashOptions,
		qs: {
			per_page: '20',
			orientation: 'landscape',
			...UnsplashOptions.qs
		},
		url: 'https://api.unsplash.com/photos/'
	};


	optionsForSpecificCollection = {
		...UnsplashOptions,
		qs: {
			count: '20',
			orientation: 'landscape',
			...UnsplashOptions.qs
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

		const unsplashPictures = JSON.parse(body);

		const blobPromises = [];
		unsplashPictures.forEach(picture => {
			blobPromises.push(FetchBlob(picture.urls.small).then(blob => {
				picture.blob = blob;
			}));
		});

		Promise.all(blobPromises).then(() => {
			this.setState({ ready: true, unsplashPictures });
		});

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
							collectionName = {this.props.collectionName}

						/>
						<Pages
							activeView = {this.props.activeView}
							activePicture = {this.props.activePicture}
							activePictureDownloadLink = {this.props.activePictureDownloadLink}
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
