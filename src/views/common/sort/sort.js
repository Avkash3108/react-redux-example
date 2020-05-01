import React from 'react';
import IconUnSorted from './icon-unsorted';
import IconSorted from './icon-sorted';

function getSortIcon(sortOrder) {
	return {
		'': <IconUnSorted/>,
		'ASC': <IconSorted/>,
		'DESC': <IconSorted/>
	}[sortOrder];
}

function isAscendingClassName(order) {
    return order === 'ASC' ? 'asc' : '';
}

const Sort = (props) => (
    <div
        className={`sortable-icons ${isAscendingClassName(props.sortOrder)}`}
        onClick={props.onSorting}
    >
        {getSortIcon(props.sortOrder)}
        
    </div>
);

export default Sort;
