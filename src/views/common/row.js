import React from 'react';
import {
	cleanDataClass,
	getDataKeys
} from '../../helpers';
import Column from './column';

const Row = (props) => {
	return (
		<div
		    className={'flex-row'}
		>
             {getDataKeys(props.searchId).map((value, index) => 
             	<Column
             	    className={`flex-cell ${cleanDataClass(value)}`}
             	    value={props.item[value]}
             	    key={`${props.item.id}-${index}`}
             	/>
             )}
		</div>
    );
};

export default Row;
