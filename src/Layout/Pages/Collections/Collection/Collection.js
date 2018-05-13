import React from 'react';
import './Collection.css';


const Collection = ( props ) => {
	const collectionCoverStyle = {
		backgroundImage: 'url(' + props.cover + ')'
	};

	const collectionThumbnailTop = {
		backgroundImage: 'url(' + props.topThumbnail + ')'
	};

	const collectionThumbnailBottom = {
		backgroundImage: 'url(' + props.bottomThumbnail + ')'
	};
	
	const style = {
		float: props.float,
	};
	
	return (
		<div className='Collection' style={style} id={props.id} onClick={props.detailedCollectionHandler}>
			<div style= {collectionCoverStyle} className='coverCollection'> 
				<p className='collectionTile'>{props.collectionName}</p> 
			</div>
			<div style={collectionThumbnailTop} className='collectionThumbnailTop'> </div>
			<div style={collectionThumbnailBottom} className='collectionThumbnailBottom'> </div>
		</div>
	);
};

export default Collection;
