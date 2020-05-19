import React from 'react';
import PropTypes from 'prop-types';

import IconUnSorted from './icon-unsorted';
import IconSorted from './icon-sorted';

function getSortIcon(sortOrder) {
    return {
        '': <IconUnSorted/>,
        'ASC': <IconSorted/>,
        'DESC': <IconSorted/>
    }[sortOrder];
}

function getClassName(order) {
    return order === 'ASC' ? 'sortable-icons asc' : 'sortable-icons';
}

const Sort = (props) => (
    <div
        className={`${getClassName(props.sortOrder)}`}
        onClick={props.onSorting}
    >
        {getSortIcon(props.sortOrder)}

    </div>
);

Sort.displayName = 'Sort';
Sort.propTypes = {
    onSorting: PropTypes.func.isRequired,
    sortOrder: PropTypes.string.isRequired

};

export default Sort;
