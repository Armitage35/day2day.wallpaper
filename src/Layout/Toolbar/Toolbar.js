import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => {

	const displayOptions = () => {
		let options = ['Explore', 'Collections', 'Gallery'];

		const checkActive = (option) => {
			if (option.toLowerCase() === props.activeView) {
				return 'active';
			}
		};

		return options.map(options => <p
			key={options.toLowerCase()}
			id={options.toLowerCase()}
			className={checkActive(options)}
			onClick={props.viewHandler}>{options}</p>);
	};

	return (
		<div className='toolbar'>
			{displayOptions()}
		</div>
	);
};

export default Toolbar;
