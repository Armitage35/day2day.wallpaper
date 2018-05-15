import React from 'react';
import './Title.css';
import Aux from '../../../hoc/Aux.js';

const Title = (props) => {

	const titleOptions = {
		gallery: 'Popular pictures',
		collections: 'Most popular',
		explore: 'Day2Day Wallpaper',
	};

	let title;
	const pictureAuthorAvatar = () => {
		if (props.activeView === 'detailedPhoto') {
			let pictureAuthor = props.pictureAuthorAvatar;

			let avatarStyle = {
				backgroundImage: "url(" + pictureAuthor + ")"
			};

			return (
				<div className='pictureAuthor' style={avatarStyle}></div>
			);
		}
	};

	if (props.activeView === 'gallery') {
		props.activeCollectionName !== null ? title = props.activeCollectionName : title = titleOptions[props.activeView];
	}
	else if (props.activeView !== 'detailedPhoto') {
		title = titleOptions[props.activeView];
	}
	else {
		title = props.pictureAuthor;
	}

	return (
		<Aux>
			{pictureAuthorAvatar()}
			<p className='title'>{title}</p>
			<hr className='titleSeparator' />
		</Aux>
	);
};

export default Title;
