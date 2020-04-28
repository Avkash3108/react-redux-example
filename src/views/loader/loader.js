import React from 'react';
import {nullify} from '../common/Nullify'

const Loader = (props) => {
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

Loader.displayName = 'Loader';
export default nullify(Loader, (props) => !props.isLoading);
