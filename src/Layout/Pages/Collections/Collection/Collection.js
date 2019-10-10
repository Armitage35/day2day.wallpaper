import React from 'react';
import './Collection.sass';


const Collection = (props) => {
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
		<div className='Collection' style={style} id={props.id} onClick={props.detailedCollectionHandler} data-collection_name={props.collectionName}>
			<div style= {collectionCoverStyle} className='coverCollection' id={props.id} data-collection_name={props.collectionName}>
				<p className='collectionTile' id={props.id} data-collection_name={props.collectionName}>{props.collectionName}</p>
			</div>
			<div style={collectionThumbnailTop} className='collectionThumbnailTop' id={props.id} data-collection_name={props.collectionName}></div>
			<div style={collectionThumbnailBottom} className='collectionThumbnailBottom' id={props.id} data-collection_name={props.collectionName}></div>
		</div>
	);
};

export default Collection;
