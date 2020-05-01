import React from 'react';
import {nullify} from '../common/Nullify'

const InfiniteLoader = (props) => {
	return (
		    <div className={'spinner loader'}>
		        <div className="rect1"/>
                <div className="rect2"/>
                <div className="rect3"/>
                <div className="rect4"/>
                <div className="rect5"/>
		    </div>
    );
};

InfiniteLoader.displayName = 'InfiniteLoader';
export default InfiniteLoader;
