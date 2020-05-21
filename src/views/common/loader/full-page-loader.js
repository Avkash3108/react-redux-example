import React from 'react';
import PropTypes from 'prop-types';

import {nullify} from '../nullify';

const FullPageLoader = () => {
    return (
        <div className='full-page-loader'>
            <div className={'spinner'}>
                <div className='rect1'/>
                <div className='rect2'/>
                <div className='rect3'/>
                <div className='rect4'/>
                <div className='rect5'/>
            </div>
        </div>
    );
};

FullPageLoader.displayName = 'FullPageLoader';
FullPageLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired
};

export default nullify(FullPageLoader, (props) => !props.isLoading);
