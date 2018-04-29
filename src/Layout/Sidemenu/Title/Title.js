import React from 'react';
import './Title.css';
import Aux from '../../../hoc/Aux.js';

const Title = ( props ) => {
    return (
        <Aux>
            <p className='title'>{props.titleName}</p>
            <hr className='titleSeparator' />
        </Aux>
    );
};

export default Title;
