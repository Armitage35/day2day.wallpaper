import React, { Component } from 'react';
import DownloadIcon from './PhotoButtons/icons/DownloadIcon.js';
import Spinner from '../../../UtilitiesComponents/Spinner.js';
import './PhotoDetails.css';

class PhotoDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			imageBlob: null
		};

		this.setAsWallpaper = this.setAsWallpaper.bind(this);
	}

	setAsWallpaper() {
		console.log('yolo');
		window.chrome.wallpaper.setWallpaper({
			url: this.props.activePictureDownloadLink,
			layout: 'CENTER_CROPPED',
			filename: 'test_wallpaper'
		}, function() {});
	}

	render() {
		if (!this.state.loaded && this.props.activePicture !== null) {
			fetch(this.props.activePicture.urls.regular).then(data => {
				const response = new Response(data.body);
				response.blob().then(blob => {
					this.setState({
						loaded: true,
						imageBlob: URL.createObjectURL(blob)
					});
				});
			});
		}

		const buttonClasses = 'bttn-unite bttn-md bttn-primary';

		const setAsWallpaper = () => {
			return <button className={buttonClasses} onClick={this.setAsWallpaper}>Set as wallpaper</button>;
		};

		if (!this.state.loaded && this.props.activePicture !== null) {
			return <Spinner />;
		}
		else {
			const downloadButton = () => {
				return <a href={this.props.activePictureDownloadLink} target='_blank'><button className={buttonClasses}> {DownloadIcon}</button></a>;
			};

			const backgroundStyle = {
				backgroundImage: `url(${this.state.imageBlob})`
			};

			return (
				<div className='PhotoDetails' style={backgroundStyle}>
					<div className='actionButtons'>
						{downloadButton()}
						{setAsWallpaper()}
					</div>
				</div>
			);

		}
	}
}

export default PhotoDetails;
