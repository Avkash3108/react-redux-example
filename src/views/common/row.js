import React from 'react';
import PropTypes from 'prop-types';

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

Row.displayName = 'Row';
Row.propTypes = {
    item: PropTypes.object.isRequired,
    searchId: PropTypes.string.isRequired

};

export default Row;
