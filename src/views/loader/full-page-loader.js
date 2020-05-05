import React from 'react';
import {nullify} from '../common/Nullify'

const FullPageLoader = (props) => {
	return (
		<div className="full-page-loader">
		    <div className={'spinner'}>
		        <div className="rect1"/>
                <div className="rect2"/>
                <div className="rect3"/>
                <div className="rect4"/>
                <div className="rect5"/>
		    </div>
		</div>
    );
};

FullPageLoader.displayName = 'FullPageLoader';
export default nullify(FullPageLoader, (props) => !props.isLoading);