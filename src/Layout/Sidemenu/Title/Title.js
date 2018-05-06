import React from 'react';
import './Title.css';
import Aux from '../../../hoc/Aux.js';

const Title = (props) => {

    const titleOptions = {
        gallery: 'Popular pictures',
        collections: 'Most popular',
        explore: 'Day2Day Wallpaper'
    };

    return (
        <Aux>
            <p className='title'>{titleOptions[props.titleName]}</p>
            <hr className='titleSeparator' />
        </Aux>
    );
};

export default Title;
