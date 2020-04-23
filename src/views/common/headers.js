import React from 'react';
import {
	cleanHeaderClass,
	getHeaderKeys
} from '../../services';
import Header from './header';

const Headers = (props) => {
	return (
		<div
		    className={'flex-row header'}
		>
             {getHeaderKeys(props.searchId).map((label, index) => 
             	<Header
             	    className={`flex-cell ${cleanHeaderClass(label)}`}
             	    label={label}
             	    key={`${label}${index}`}
             	/>
             )}
		</div>
    );
};

export default Headers;
